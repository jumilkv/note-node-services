const logger = require('../middleware/winston')
const pool = require('../utils/dbConnection')


module.exports = async function dataFetch(query, params, logMessage) {
    try {
        let queryResult = await pool.query(query, params)
        logger.info(logMessage)
        return queryResult
    }
    catch (error) {
        logger.error(error.message)
        return error
    }
}



