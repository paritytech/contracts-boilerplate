import * as log from '@std/log'

const LOG_LEVEL = (Deno.env.get('LOG_LEVEL')?.toUpperCase() ??
    'INFO') as log.LevelName

log.setup({
    handlers: {
        console: new log.ConsoleHandler(LOG_LEVEL),
    },
    loggers: {
        default: {
            level: LOG_LEVEL,
            handlers: ['console'],
        },
    },
})

export const logger = log.getLogger()
