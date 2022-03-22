const { digitsToArray, getRandomPhoneNumber, getRandomNumber } = require('../functions/mobilePhone');

describe('mobile phone', () => {
  it('get random number up to maximum value', () => {
    const maxNumber = 10;
    expect(getRandomNumber(maxNumber)).not.toBeNaN();
    expect(getRandomNumber(maxNumber)).toBeGreaterThanOrEqual(0);
    expect(getRandomNumber(maxNumber)).toBeLessThanOrEqual(maxNumber - 1);
  });

  it('check getRandomPhoneNumber() if number starts from digit from list of possible digits for the danish number', () => {
    const phoneNumber = getRandomPhoneNumber();
    const digitsArray = digitsToArray();
    expect(phoneNumber.phoneNumber).toMatch(new RegExp(`^(${digitsArray.join('|')})`));
  });

  it('number is length of 8', () => {
    const phoneNumber = getRandomPhoneNumber();
    expect(phoneNumber.phoneNumber.length).toBe(8);
  });
});
