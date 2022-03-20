const { digitsToArray, getRandomPhoneNumber, getRandomNumber } = require('../functions/mobilePhone.js');
describe('mobile phone', function(){
    it('get random number up to maximum value', () => {
        const maxNumber = 10;
        expect(getRandomNumber(maxNumber)).not.toBeNaN();
        expect(getRandomNumber(maxNumber)).toBeGreaterThanOrEqual(0);
        expect(getRandomNumber(maxNumber)).toBeLessThanOrEqual(maxNumber-1);
    }); 
    
    it('check getRandomPhoneNumber() if number starts from digit from list of possible digits for the danish number', () => {
        let phoneNumber = getRandomPhoneNumber();
        const digitsArray = digitsToArray();
        expect(String.isString(phoneNumber)).toBe(true);
        expect(phoneNumber).toMatch(new RegExp(`^(${digitsArray.join("|")})`));
    }); 

    it('number is length of 8', () => {
        const phoneNumber = getRandomPhoneNumber();
        expect(phoneNumber.length).toBe(8);
    })

})