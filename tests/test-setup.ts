import { Hex } from 'viem'
import { ChildProcess, execSync, spawn } from 'node:child_process'
import { TestProject } from 'vitest/node.js'
import { spawnSync } from 'node:child_process'
import { accessSync, constants } from 'node:fs'

declare module 'vitest' {
    export interface ProvidedContext {
        rpcUrl: string
        privateKey: Hex
    }
}

async function ensureExec(bin: string) {
    try {
        const binPath = execSync(`which ${bin}`).toString().trim()
        accessSync(binPath, constants.X_OK)
    } catch {
        console.error(`❌ ${bin} does not exists or is not executable`)
        process.exit(1)
    }
}
function killProcessOnPort(port: number) {
    // Check which process is using the specified port
    const result = spawnSync('lsof', ['-ti', `:${port}`])
    const pids = result.stdout.toString().trim().split('\n').filter(Boolean)

    if (pids.length) {
        console.log(` Port ${port} is in use. Killing process...`)

        // Kill each process using the port
        for (const pid of pids) {
            process.kill(Number(pid), 'SIGKILL')
            console.log(`Killed process with PID: ${pid}`)
        }
    }
}

// wait for http request to return 200
function waitForHealth(url: string, timeout = 30_000) {
    return new Promise<void>((resolve, reject) => {
        const start = Date.now()
        const interval = setInterval(async () => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        jsonrpc: '2.0',
                        method: 'eth_syncing',
                        params: [],
                        id: 1,
                    }),
                })

                if (res.status !== 200) {
                    return
                }

                clearInterval(interval)
                resolve()
            } catch (_err) {
                const elapsed = Date.now() - start
                if (elapsed > timeout) {
                    clearInterval(interval)
                    reject(new Error('hit timeout'))
                }
            }
        }, 1000)
    })
}

export default async function setup(project: TestProject) {
    project.provide(
        'privateKey',
        '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133'
    )

    const port = process.env.RPC_PORT ?? '8545'
    const rpcUrl = `http://localhost:${port}`
    project.provide('rpcUrl', rpcUrl)

    if (process.env.START_GETH) {
        const gethArgs = [
            '--http',
            '--http.api',
            'web3,eth,debug,personal,net',
            '--http.port',
            '8545',
            '--dev',
            '--verbosity',
            '0',
        ]

        killProcessOnPort(8545)
        const bin = process.env.GETH_BIN ?? 'geth'
        ensureExec(bin)
        console.log('🚀 Starting geth...')
        const proc = spawn(bin, gethArgs)
        await waitForHealth('http://localhost:8545').catch()
        return () => {
            proc.kill()
        }
    }

    const procs: ChildProcess[] = []
    if (process.env.START_SUBSTRATE_NODE) {
        const substrateNodeArgs = [
            '--dev',
            '-l=error,evm=debug,sc_rpc_server=info,runtime::revive=debug',
        ]

        killProcessOnPort(9944)
        const bin = process.env.SUBSTRATE_BIN ?? 'substrate-node'
        ensureExec(bin)
        console.log('🚀 Starting substrate-node ...')
        procs.push(spawn(bin, substrateNodeArgs))
    }

    if (process.env.START_ETH_RPC) {
        // Run eth-rpc on 8545
        const ethRpcArgs = [
            '--dev',
            '--node-rpc-url=ws://localhost:9944',
            '-l=rpc-metrics=debug,eth-rpc=debug',
        ]

        killProcessOnPort(8545)
        const bin = process.env.ETH_RPC_BIN ?? 'eth-rpc'
        ensureExec(bin)
        console.log('🚀 Starting eth-rpc ...')
        procs.push(spawn(bin, ethRpcArgs))
        await waitForHealth(rpcUrl)
    } else {
        try {
            await waitForHealth(rpcUrl, 1000)
        } catch {
            console.error(
                `❌ NO RPC server running at ${rpcUrl}.\nstart one or use START_GETH=true or START_SUBSTRATE_NODE=true`
            )
            process.exit(1)
        }
    }

    return () => {
        procs.forEach((proc) => proc.kill())
    }
}
