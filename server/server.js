const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes.js');
const cors = require('cors');

const port = 8000;

app.use(cors());
app.use(express.static(path.resolve('public')));

app.use('*', router);

app.listen(port, () => {
  console.log(`Strava Report Generator is Listening on Port ${[port]}`)
});