'use strict';

const url = require('url');
const fs = require('fs');

// UGH Global variable... hack because we don't have an actual db
var currentParagraph = 0;

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
  app.route('/api/contracts')
    .get((request, response) => {

      // TODO: Replace with logging system
      console.log("User has requested all contracts");

      // Send a JSON parsed response
      response.send(JSON.stringify(getAllContracts()));
    });


  /**
   * returns a specific contract by id
   * can pass pages as optional parameter in the search string
   * to return a specific page
   */
  app.route('/api/contracts/:contractId')
    .get((request, response) => {
      var contractId = request.params.contractId;

      // TODO: Replace with logging system
      console.log(`User has requested a specific contract: ${contractId}`);

      // Send a JSON response
      response.send(JSON.stringify(getContract()))
    });

  /**
   * Returns all paragraphs associated with a specific contract
   */
  app.route('/api/contracts/:contractId/paragraphs')
    .get((request, response) => {
      var contractId = request.params.contractId;

      var urlParts = url.parse(request.url, true);
      var parameters = urlParts.query;

      // TODO: Try to type as model
      var page = parameters.page;

      if (parameters.page != null) {
        // TODO: Replace with logging system
        console.log(`User has requested page: ${page}`);
      }

      // TODO: Replace with logging system
      console.log(`User has all paragraphs a specific contract: ${contractId}`);

      // TODO: the id should call a specific contract when we have more than one
      // TODO: it will call the id from the database and return all paragraphs with that id

      // Send a JSON response
      response.send(JSON.parse(fs.readFileSync('./src/assets/source-text-data/contract-paragraph-data.json')));
    });


  const getAllContracts = () => {
    return [
      getContract(),
    ]
  };

  // DEV / TESTING ONLY
  // TODO: Move to generators
  const getContract = () => {
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
