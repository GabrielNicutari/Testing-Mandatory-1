const data = require("../database/person-names.json");

function generateNamesAndGender() {
  const persons = data.persons;

  const randomElement = persons[Math.floor(Math.random() * persons.length)];

  return randomElement;
}

module.exports = generateNamesAndGender;
