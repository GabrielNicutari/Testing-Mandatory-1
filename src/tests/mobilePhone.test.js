const { digitsToArray, getRandomPhoneNumber} = require('../functions/mobilePhone');

describe('mobile phone', () => {

  test('check getRandomPhoneNumber() if number starts from digit from list of possible digits for the danish number', () => {
    const phoneNumber = getRandomPhoneNumber();
    const digitsArray = digitsToArray();
    expect(phoneNumber.phoneNumber).toMatch(new RegExp(`^(${digitsArray.join('|')})`));
  });

  test('number is length of 8', () => {
    const phoneNumber = getRandomPhoneNumber();
    expect(phoneNumber.phoneNumber.length).toBe(8);
  });
});
