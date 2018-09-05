const fs = require('fs');
const sourceText = require('./src/assets/source-text-data/source-text-generator.js');

const localDir = './src/assets/source-text-data/';
const contractDataFileName = 'contract-data.json';
const contractParagraphDataFileName = 'contract-paragraph-data.json';

const setContractParagraphsData = () => {
  const fullPath = `${localDir}${contractParagraphDataFileName}`;

  if (checkFileExists(contractParagraphDataFileName)) {
    fs.unlinkSync(`${fullPath}`);
  }

  console.log("Generating contract paragraph data...");

  fs.writeFileSync(fullPath, JSON.stringify(getContractParagraphData()));

  console.log("Data generation complete!");
};


const checkFileExists = (fileName) => {
  return fs.existsSync(`${localDir}${fileName}`);
};

const getContractParagraphData = () => {
  return {
    "data": getParagraphs(),
    "pagination": {
      "count": 15000,
      "page": 1,
      "pages": 300,
      "pageSize": 50
    }
  };
};

const getParagraphs = () => {
  const paragraphs = [];

  for (let i = 100000; i >= 0; --i) {
    paragraphs.push(getParagraph());
  }

  return paragraphs;

};

const getParagraph = () => {
  return {
    "type": "contract-paragraphs",
    "id": "0d60b462-2b98-11e8-97a1-080027a8df8b",
    "attributes": {
      "text": sourceText.getSourceText(),
    }
  };
};

setContractParagraphsData();
