import { defineWorkspace } from 'vitest/config'
import { loadEnv } from 'vite'
export default defineWorkspace([
    {
        test: {
            globals: true,
            name: 'unit',
            env: loadEnv('', process.cwd(), ''),
            globalSetup: './tests/test-setup.ts',
            include: ['**/*.test.ts'],
        },
    },
])
