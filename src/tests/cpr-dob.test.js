const { generateCPR, generateRandomDate, getDateOfBirth } = require('../functions/cpr');

describe('cpr and dob test suite', () => {
    const maleCpr = generateCPR('male');
    const femaleCpr = generateCPR('female');

    it('should generate a valid male cpr', () => {
        expect(maleCpr).toHaveLength(10);
        const lastDigit = maleCpr.charAt(maleCpr.length - 1);
        const isLastDigitOdd = lastDigit % 2 !== 0;
        expect(isLastDigitOdd).toBe(true);
    });

    it('Should generate a valid female cpr', () => {
        expect(femaleCpr).toHaveLength(10);
        const lastDigit = femaleCpr.charAt(femaleCpr.length - 1);
        const isLastDigitEven = lastDigit % 2 === 0;
        expect(isLastDigitEven).toBe(true);
    });

    it.skip('Date of birth should match the cpr date', () => {
        const date = maleCpr.substring(0, 2);
        const month = maleCpr.substring(2, 4);
        const year = maleCpr.substring(4, 6);
        
    });

});
