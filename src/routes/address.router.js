const router = require('express').Router({ mergeParams: true });

router.get('/', async (req, res) => {
    const postalCodeAndTown = await getRandomPostalCodeAndTown();
    res.send({
      street: getStreet(),
      streetFloor: getStreetNumber(),
      floor: getFloor(),
      door: getRandomDoor(),
      postalCode: postalCodeAndTown[0].cPostalCode,
      town: postalCodeAndTown[0].cTownName,
    });
  });

module.exports = router;