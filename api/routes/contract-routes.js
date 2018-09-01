'use strict';

const url = require('url');

module.exports = function (app) {

  /**
   * Goes to app root
   */
  app.route('/')
    .get((request, response) => {
      // TODO: Replace with logging system
      console.log("User has arrived at the landing page");

      // Send a JSON parsed response
      response.send('You have arrived at the landing page');
    });

  /**
   * Returns all contracts
   */
  app.route('/contracts')
    .get((request, response) => {

      // TODO: Replace with logging system
      console.log("User has requested all contracts");

      // Send a JSON parsed response
      response.send(JSON.stringify(getContracts()));
    });


  /**
   * returns a specific contract by id
   * can pass pages as optional parameter in the search string
   * to return a specific page
   */
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

      // Send a JSON response
      response.send(JSON.stringify(`Your sample contract: ${contractId}`))
    });

  /**
   * Returns all paragraphs associated with a specific contract
   */
  app.route('/contracts/:contractId/paragraphs')
    .get((request, response) => {
      var contractId = request.params.contractId;

      // TODO: Replace with logging system
      console.log(`User has all paragraphs a specific contract: ${contractId}`);

      // Send a JSON response
      response.send(JSON.stringify(`Your sample paragraphs for contract: ${contractId}`))
    });



  // DEV / TESTING ONLY
  const getContracts = () => {
    return {
      data: {
        type: "contracts",
        id: "dc89ff49-8449-11e7-ac1d-3c52820efd20",
        attributes: {
          name: "Contract Name"
        }
      },
      relationships: {
        paragraphs: {
          links: {
            self: "\/contracts\/dc89ff49-8449-11e7-ac1d-3c52820efd20\/paragraphs"
          }
        }
      }
    }

  };
};
