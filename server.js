'use strict';

console.log('Loading backend...');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  router = express.Router();

var routes = require('./api/routes/contract-routes'); //importing route

const originWhitelist = ['http://localhost:3000'];

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//register the routes
routes(app);

// listen on specified port
app.listen(port);

// TODO: Handle more status errors
app.use(function (req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log(`Contract Paragraph Viewer REST API server started on: ${port}`);
