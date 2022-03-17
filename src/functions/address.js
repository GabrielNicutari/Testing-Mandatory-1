const router = require("express").Router();
const dbPool = require('../database/connection').pool;


router.get('/address', (req, res) => {

  dbPool.getConnection(function(err, conn) {
    if (err) console.log(err);
    
    // Do something with the connection
    conn.query("SELECT * FROM postal_code LIMIT 5", (err, rows, fields) => {
      if (err) console.log(err);
      console.log(rows);
    });
  
    // Don't forget to release the connection when finished!
    dbPool.releaseConnection(conn);

    // There might be queries that are not ended and still be displayed randomly, 
    // so it's better to end the pool at some point. Im not sure where exactly to place the function, though.
  });
  res.send("Hello world!");

  // dbPool.end(function (err) {
  //   if (err) throw err;
  //   // process.exit();
  // });
});

function generateStreet() {
  let street = '';
  do {
      street += getRandomCharacter()
  } while(Math.random() < 0.5 && street.length < 50);
  return street;
}

function generateStreetNumber() {
    let streetNumber = getRandomNumber(1, 999);
    if (Math.random() < 0.5) streetNumber += getRandomCharacter().toUpperCase();
    return streetNumber;
}

function generateFloor() {
    let floor = getRandomNumber(0, 99);
    if (floor === 0) floor = 'st';
    return floor;
}

function getRandomCharacter() {
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
return possible.charAt(Math.floor(Math.random() * possible.length));
}

//both values included
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {router};