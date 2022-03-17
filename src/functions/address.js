function generateStreet() {
    let street = '';
    do {
        street += getRandomCharacter()
    } while(Math.random() < 0.5 && street.length < 50);
    return street;
}

function generateStreetNumber() {
    let streetNumber = getRandomNumber(1, 999);
    if (Math.random() < 0.5) streetNumber += getRandomCharacter().toUpperCase();
    return streetNumber;
}

function getRandomCharacter() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

//both values included
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}