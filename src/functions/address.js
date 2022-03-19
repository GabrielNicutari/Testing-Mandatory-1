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
  });
  res.send("Hello world!");

});

module.exports = {router};