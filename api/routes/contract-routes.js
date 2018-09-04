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

      // Send a JSON response
      response.send(JSON.stringify(getParagraphs()))
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

  const getParagraphs = () => {
    const paragraphData = [];

    for (let i = 0; i < 1000; i++) {
      paragraphData.push(getParagraph());
    }

    return {
      data: paragraphData,
      pagination: {
        count: 15000,
        page: 1,
        pages: 300,
        pageSize: 50
      }
    };
  };

  const getParagraph = () => {
    return {
      type: "contract-paragraphs",
      id: "0d60b462-2b98-11e8-97a1-080027a8df8b",
      attributes: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra. Fermentum dui faucibus in ornare quam viverra orci sagittis. Purus non enim praesent elementum facilisis leo vel. Vitae semper quis lectus nulla at volutpat diam ut. Facilisi etiam dignissim diam quis. Nunc lobortis mattis aliquam faucibus. Aliquam vestibulum morbi blandit cursus risus. Duis at tellus at urna condimentum mattis pellentesque id. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Nascetur ridiculus mus mauris vitae ultricies leo integer. Semper auctor neque vitae tempus. Vel facilisis volutpat est velit egestas dui. Dui sapien eget mi proin sed libero enim sed faucibus. Leo vel fringilla est ullamcorper eget. Sed risus pretium quam vulputate. Odio morbi quis commodo odio aenean sed adipiscing diam. Blandit aliquam etiam erat velit.\n" +
          "\n"
      }
    };
  }
};
