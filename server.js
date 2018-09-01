'use strict';

console.log('Loading backend...');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  router = express.Router();

var routes = require('./api/routes/contract-routes'); //importing route

const originWhitelist = ['http://localhost:3000'];


// CORS Middleware
// middleware route that all requests pass through
router.use((request, response, next) => {
  console.log('Server info: Request received');

  let origin = request.headers.origin;

  // only allow requests from origins that we trust
  if (originWhitelist.indexOf(origin) > -1) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }

  // only allow get requests, separate methods by comma e.g. 'GET, POST'
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);

  // push through to the proper route
  next();
});

//register the route

routes(app);

// listen on specified port
app.listen(port);

// TODO: Handle more status errors
app.use(function (req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log(`Contract Paragraph Viewer REST API server started on: ${port}`);
