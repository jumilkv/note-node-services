const winston = require('winston')
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({ filename: './logs/error.log', level: 'error', 'timestamp': true }),
        new winston.transports.File({ filename: './logs/combined.log', 'timestamp': true })
    ],

});
module.exports = logger;