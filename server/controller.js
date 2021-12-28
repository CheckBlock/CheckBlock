// importing our database to populate
const db = require("./database");
const fetch = require('node-fetch');
// importing package for Socrata Open Data API
const soda = require("soda-js");

const Controller = {};

// 311 API Key for more access
// API Key ID: f2gc3hwklt4vmmpuc73rb2iqs
// API Key Secret: 2ejvj7bxp9jhugxlfbb140roodq51b4g7tl3aybfog2agj9myd

Controller.printInfo = (req, res, next) => {
  console.log('reached printInfo');
  const { data } = req.body.data_311;
  console.log(data);
  return next();
};


module.exports = Controller;
