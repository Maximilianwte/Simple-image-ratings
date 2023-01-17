// https://jackwhiting.co.uk/posts/using-firebase-admin-sdk-with-netlify-lambda-functions/
const express = require("express");
const serverless = require("serverless-http");
const axios = require('axios');
var fs = require('fs');
var csvhandler = require('jquery-csv');

// Express App
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(404);
});

router.post("/get_analysis", function (req, res) {
  //var input = JSON.parse(req.body);
  /* var dataArray = fs.readFileSync('functions/data/analysis.csv','utf8');
  var analysisData = csvhandler.toObjects(dataArray);
  res.status(200).send(analysisData);   */
  axios
  .get("https://raw.githubusercontent.com/Maximilianwte/AAA-Front/master/functions/data/analysis.csv")
  .then(function (response) {
    res.attachment('filename.csv');
    res.status(200).send(JSON.stringify(response.data));
  });  

  //var data = fs.readFileSync('./functions/data/analysis.csv','utf8');
});

app.use("/.netlify/functions/data", router);

module.exports.handler = serverless(app);