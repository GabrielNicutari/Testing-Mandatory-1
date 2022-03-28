const router = require('express').Router();
const { getRandomAddress } = require('../functions/address');
const { generateCPR, getDateOfBirth } = require('../functions/cpr');
const { getRandomPhoneNumber } = require('../functions/mobilePhone');
const { generateNamesAndGender } = require('../functions/nameAndGender');

/**
 * @route /cpr
 * Return a fake CPR
 */
router.get('/cpr/:gender', (req, res, next) => {
	const cpr = generateCPR(req.params.gender);
	res.send(cpr);
});

/**
 * @route /cpr-name-gender
 * Return a fake CPR, full name and gender
 */
router.get('/cpr-name-gender', (req, res, next) => {
	const { name, surname, gender } = generateNamesAndGender();
	const { cpr } = generateCPR(gender);
	res.send({ cpr, name, surname, gender });
});

/**
 * @route /cpr-name-gender-dob
 * Return a fake CPR, full name, gender and date of birth
 */
router.get('/cpr-name-gender-dob', (req, res, next) => {
	const { name, surname, gender } = generateNamesAndGender();
	const { cpr } = generateCPR(gender);
	const { dob } = getDateOfBirth(cpr);
	res.send({ cpr, name, surname, gender, dob });
});

/**
 * @route /name-gender
 * Return a fake full name and gender
 */
router.get('/name-gender', (req, res, next) => {
	const nameAndGender = generateNamesAndGender();
	res.send(nameAndGender);
});

/**
 * @route /name-gender-dob 
 * Return a fake full name, gender and date of birth
 */
router.get('/name-gender-dob', (req, res, next) => {
	const { name, surname, gender } = generateNamesAndGender();
	const { cpr } = generateCPR(gender);
	const { dob } = getDateOfBirth(cpr);
	res.send({ name, surname, gender, dob });
});

/**
 * @route /address
 * Return a fake address
 */
router.get('/address', async (req, res) => {
	const address = await getRandomAddress();
	res.send(address);
});

/**
 * @route /mobile
 * Return a fake mobile phone number
 */
router.get('/mobile', (req, res, next) => {
	const { phoneNumber } = getRandomPhoneNumber();
	res.send({ phoneNumber });
});

/**
 * @route /all
 * Return all information for a fake person
 * (CPR, full name, gender, date of birth, address, mobile phone number)
 */
router.get('/all', async (req, res, next) => {
	const { name, surname, gender } = generateNamesAndGender();
	const { cpr } = generateCPR(gender);
	const { dob } = getDateOfBirth(cpr);
	const { phoneNumber } = getRandomPhoneNumber();
	const address = await getRandomAddress();
	res.send({ cpr, name, surname, gender, dob, address, phoneNumber });
});

/**
 * @route /all/bulk
 * @queryParam amount (optional) - defaults to 2
 * Return fake person information in bulk (all information for 2 to 100 persons)
 */
router.get('/all/bulk', async (req, res, next) => {
	let amount = Number(req.query.amount) || 2; // 2 fake persons if not specified
	if (amount < 2) amount = 2; // covers the negative numbers
	if (amount > 100) amount = 100; // covers numbers larger than 100
	
	amount = amount | 0; // covers double type ( "| 0" converts a double into integer)
	let list = new Array(amount | 0).fill(null); 
	const bulkData = await Promise.all(list.map(async () => {
		const { name, surname, gender } = generateNamesAndGender();
		const { cpr } = generateCPR(gender);
		const { dob } = getDateOfBirth(cpr);
		const { phoneNumber } = getRandomPhoneNumber();
		const address = await getRandomAddress();
		return { name, surname, gender, cpr, dob, phoneNumber, address };
	}));
	res.send({ length: bulkData.length, result: bulkData });
});

module.exports = router;