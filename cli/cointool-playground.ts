#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'

// await env.wallet.sendTransaction({
//     to: '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63',
//     value: parseEther('1'),
// })

{
    const result = await env.wallet.writeContract(
        {
            // address: "0xc01ee7f10ea4af4673cfff62710e1d7792aba8f3",
            address: "0x962c0940d72e7db6c9a5f81f1ca87d8db2b82a23",
            abi: abis.CoinTool_App,
            functionName: 't',
            args: [80n, '0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df00000000000000000000000000000000000000000000000000000000000001db00000000000000000000000000000000000000000000000000000000', '0x01'],
        },
    )

    console.log('tx', result)
}
