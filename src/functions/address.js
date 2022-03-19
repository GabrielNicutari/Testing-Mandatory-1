const router = require("express").Router();
const dbPool = require('../database/connection').pool;
router.get('/address', (req, res) => {

    if (err) console.log(err);
  dbPool.getConnection(function(err, conn) {
    
    // Do something with the connection
    conn.query("SELECT * FROM postal_code LIMIT 5", (err, rows, fields) => {
      if (err) console.log(err);
      console.log(rows);
    });
  
    // Don't forget to release the connection when finished!
    dbPool.releaseConnection(conn);
  });
  res.send("Hello world!");

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