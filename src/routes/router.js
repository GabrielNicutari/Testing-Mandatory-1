const router = require('express').Router();

router.use('/address', require('./address.router.js'));

module.exports = router;