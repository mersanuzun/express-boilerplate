const express = require('express');
const bodyParser = require('body-parser');
const requestContext = require('./middlewares/contex');
const logger = require('./lib/logger');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestContext(logger));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(PORT);