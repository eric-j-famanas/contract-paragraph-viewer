'use strict';

const url = require('url');

module.exports = function (app) {

  // Landing page
  app.route('/')
    .get((request, response) => {
      // TODO: Replace with logging system
      console.log("User has arrived at the landing page");

      // Send a JSON parsed response
      response.send('You have arrived at the landing page');
    });

  // Return a list of all contracts
  app.route('/contracts')
    .get((request, response) => {

      // TODO: Replace with logging system
      console.log("User has requested all contracts");

      // Send a JSON parsed response
      response.send(JSON.stringify('All Contracts'));
    });


  app.route('/contracts/:contractId')
    .get((request, response) => {
      var contractId = request.params.contractId;

      var urlParts = url.parse(request.url, true);
      var parameters = urlParts.query;

      // TODO: Try to type as model
      var page = parameters.page;

      // TODO: Replace with logging system
      console.log(`User has requested a specific contract: ${contractId}`);

      if (parameters.page != null) {
        // TODO: Replace with logging system
        console.log(`User has requested page: ${page}`);
      }

      // Send a JSON respons
      response.send(`Your sample contract: ${contractId}`)
    });
};
