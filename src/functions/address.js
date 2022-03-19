const router = require("express").Router();
const promisePool = require('../database/connection').pool.promise();

async function getRandomPostalCodeAndTown() {
  const mysqlQuery = "SELECT * FROM postal_code ORDER BY RAND() LIMIT 1";
  const [rows, fields] = await promisePool.query(mysqlQuery);
  return rows;
  // https://stackoverflow.com/questions/57121227/why-do-we-need-to-release-connection-when-using-connection-pool-in-mysql
}

//Returns a random integer from 'start' to array.length - 1 + start
function getRandomNumber(maxLength, start = 0) {
  return Math.floor(Math.random() * (maxLength - start)) + start;
}

function getRandomDoor() {
  const doorOptions = ['side', 'number', 'house-number']; 
  const options = { 
    'SIDE': doorOptions[0],
    'NUMBER': doorOptions[1], 
    'HOUSE_NUMBER': doorOptions[2]
  };
  const randOptionIndex = getRandomNumber(doorOptions.length);

  switch(doorOptions[randOptionIndex]) {
    case options.SIDE:
      const sideOptions = ['th', 'mf', 'tv'];
      const randOptionIndex = getRandomNumber(sideOptions.length); 
      return sideOptions[randOptionIndex];
    
    case options.NUMBER:
      return getRandomNumber(50, 1);
    
    case options.HOUSE_NUMBER:
      let result = '';
      const firstAsciiCh = 97;
      const alphabetLength = 26;
      result += String.fromCharCode(firstAsciiCh + getRandomNumber(alphabetLength)); // Returns a random character from the english alphabet

      if (getRandomNumber(2)) result += '-';

      result += getRandomNumber(999, 1);
      return result; // eg: c-1, f23, z-999
    
    default:
      'Internal Error';
  }
}

router.get('/address', async (req, res) => {
  const postalCodeAndTown = await getRandomPostalCodeAndTown();

  const door = getRandomDoor();
  
  const response = `
    Postal Code: ${postalCodeAndTown[0].cPostalCode}, 
    Town: ${postalCodeAndTown[0].cTownName},
    Door: ${door}`;

  res.send(response);
});
module.exports = {router};

function generateStreet() {
    let street = '';
    do {
        street += getRandomCharacter()
    } while(Math.random() < 0.5 && street.length < 51);
    return street;
}

function generateStreetNumber() {
    let streetNumber = getRandomNumber(1, 1000);
    if (Math.random() < 0.5) streetNumber += getRandomCharacter().toUpperCase();
    return streetNumber;
}

function generateFloor() {
    let floor = getRandomNumber(0, 100);
    if (floor === 0) floor = 'st';
    return floor;
}

function getRandomCharacter() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅØÆabcdefghijklmnopqrstuvwxyzåøæ";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}