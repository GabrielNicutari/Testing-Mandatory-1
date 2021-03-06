const { generateNamesAndGender } = require('../functions/nameAndGender');
const data = require('../database/person-names.json');

describe('Extract random person from json file', () => {
  test('should extract one object in the boundaries of the json file', () => {
    const { persons } = data;
    const randomPerson = generateNamesAndGender();

    expect(persons).toEqual(expect.arrayContaining([randomPerson]));
  });
});
