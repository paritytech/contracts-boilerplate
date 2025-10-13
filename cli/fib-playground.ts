#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'

const result = await env.debugClient.traceTransaction(
    '0x35cb9c87fe1ac4e395b9928ca0308a8f6d02f311a08d4cf37e77038d664aacd8',
    'callTracer',
    {
        withLog: true,
    }
)
console.log(result)
