function generateStreet() {
    let street = '';
    do {
        street += getRandomCharacter()
    } while(Math.random() < 0.5 && street.length < 51);
    return street;
}

function generateStreetNumber() {
    let streetNumber = getRandomNumber(1, 1000);
    if (Math.random() < 0.5) streetNumber += getRandomCharacter().toUpperCase();
    return streetNumber;
}

function generateFloor() {
    let floor = getRandomNumber(0, 100);
    if (floor === 0) floor = 'st';
    return floor;
}

function getRandomCharacter() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅØÆabcdefghijklmnopqrstuvwxyzåøæ";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {generateFloor, generateStreetNumber, generateStreet}