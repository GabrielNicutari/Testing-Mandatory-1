const router = require("express").Router();

router.get('/address', (req, res) => {
  res.send("Hello world!");
});

module.exports = {router};