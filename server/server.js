const express = require('express');
const app = express();
const path = require('path');
const Controller = require('./Controller');

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT);