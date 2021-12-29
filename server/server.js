const express = require('express');
const app = express();
const path = require('path');

const Controller = require('./controller');

const PORT = 3000;

// let date = date.now();

app.use(express.json());

app.get('/', (req, res) => {
  console.log("server - root");
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/printInfo', Controller.printInfo, (req, res) => {
  console.log('importing 311 Data');
  return res.sendStatus(200);

});

app.listen(PORT);