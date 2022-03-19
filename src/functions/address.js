const router = require("express").Router();
const promisePool = require('../database/connection').pool.promise();


async function getRandomPostalCodeAndTown() {
  const mysqlQuery = "SELECT * FROM postal_code ORDER BY RAND() LIMIT 1";
  const [rows, fields] = await promisePool.query(mysqlQuery);
  return rows;
  // https://stackoverflow.com/questions/57121227/why-do-we-need-to-release-connection-when-using-connection-pool-in-mysql
}

router.get('/address', async (req, res) => {
  const postalCodeAndTown = await getRandomPostalCodeAndTown();
  
  res.send(postalCodeAndTown);
});

module.exports = {router};