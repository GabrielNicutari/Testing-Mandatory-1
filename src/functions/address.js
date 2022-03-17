function generateStreet() {
    let street = '';
    do {
        street += getRandomCharacter()
    } while(Math.random() < 0.5 && street.length < 50);
    return street;
}

function getRandomCharacter() {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}