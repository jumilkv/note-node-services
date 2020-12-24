const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const notes = require('./src/routing/notes')

const logger = require('./src/middleware/winston')

app.use(cors())

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/api/notes', notes);

app.use(function (err, req, res, next) {
    logger.error(err.message)
    res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT, function () {
    console.log('now listening for requests at ' + process.env.PORT);
})
app.timeout = 20;