const { digitsToArray, getRandomPhoneNumber, getRandomNumber } = require('../functions/mobilePhone.js');
describe('mobile phone', function(){
    it('get random number up to maximum value', () => {
        const maxNumber = 10;
        expect(getRandomNumber(maxNumber)).toBeGreaterThanOrEqual(0);
        expect(getRandomNumber(maxNumber)).toBeLessThanOrEqual(maxNumber-1);
    }); 
    
    it('check if number starts from digit from list of possible digits for the danish number', () => {
        const phoneNumber = getRandomPhoneNumber();
        const digitsArray = digitsToArray();
        expect(phoneNumber.slice(0,3)).toMatch(new RegExp(digitsArray.join("|"), 'gi'));
    }); 

    it('number is length of 8', () => {
        const phoneNumber = getRandomPhoneNumber();
        expect(phoneNumber.length).toBe(8);
    })

})