const {getRandomNumber} = require('../functions/address');

//for generating random address, it doesn't make sense to test it
//for example for street name
//length should be between 10-50 characters
//only contains a-zA-Z + danish characters
//but this depends on getRandomnumber/Character methods
//everything is generated randomly - hard to test, no parameters passed
//can try to run it in a loop multiple times and check for conditions
//but it won't catch the problem every time in case it is there

//tests for getRandomNumber
//still not 100% accurate as the values are still random, but the small range between values
//makes it more probablz to catch errors
//Test cases:
//max = 5, min = 4 - should only return 4 as 5 is not included - still will run in a loop few times to make it more accurate
//max = 4, min = 5 - should have the same result as above
//max = 2 - should have default min as 0 so should only return 0 or 1
//nothing - min defualt = 0, max default = 1 - should return 0


describe('address random number', function(){

    const testsDefinedValues = [
        {args: [5, 4], expected: 4},
        {args: [4, 5], expected: 4},
    ]

    testsDefinedValues.forEach(({args, expected}) => {
        //run each test 10 times to try to catch an error
        for (let i = 0; i < 10; i++) {
            it(`get random number from default to ${args[0]} exclusive, try number: ${i}`, () => {
                expect(getRandomNumber(args[0], args[1])).toEqual(expected);
            })
        }
    })

    const testsUndefinedMin = [
        {args: 2, expected: [0, 2]},
        {args: 5, expected: [0, 5]},
    ]

    testsUndefinedMin.forEach(({args, expected}) => {
        //run each test 10 times to try to catch an error
        for (let i = 0; i < 10; i++) {
            it(`get random number from default to ${args} exclusive, try number: ${i}`, () => {
                expect(getRandomNumber(args)).toBeGreaterThanOrEqual(expected[0]);
                expect(getRandomNumber(args)).toBeLessThan(expected[1]);
            })
        }
    })

    //run each test 10 times to try to catch an error
    for (let i = 0; i < 10; i++) {
        it(`get random number from default to default exclusive, try number: ${i}`, () => {
            expect(getRandomNumber()).toEqual(0);
        })
    }

    const testsNotNumber = [
        {args: 'text'},
        {args: ''},
        {args: null},
    ]

    testsNotNumber.forEach(({args}) => {
        it(`throw an exception because passed parameter is not a number`, () => {
            expect(() => {getRandomNumber(args);}).toThrow('Passed parameter is not a number.');
            expect(() => {getRandomNumber(0, args);}).toThrow('Passed parameter is not a number.');
        })
    })

})

