const express = require('express');
const cors = require('cors');
const config = require('./config/index');
require('../database');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./api/controllers'));

const port = config.port || 3333;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});