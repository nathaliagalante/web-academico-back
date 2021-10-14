const express = require('express');
const cors = require('cors');
const routes = require('./config/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3333, () => console.log('running...'));

module.exports = app;