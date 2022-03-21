const digitCombination = ['2', '30', '31', '40', '41', '42', '50', '51', '52', '53', 
    '60', '61', '71', '81', '91', '92', '93', '342', '344-349', '356-357', '359', '362', '365-366', '389', '398', '431', '441', '462', 
    '466', '468', '472', '474', '476', '478', '485-486', '488-489', '493-496','498-499', '542-543', '545','551-552', 
    '556', '571-574', '577', '579', '584', '586-587', '589', '597-598', '627', '629', '641', '649', '658', '662-665', '667', 
    '692-694', '697','771-772', '782-783', '785-786', '788-789','826-827', '829'];

function digitsToArray() {
    return digitCombination.map( digit => {
        if (new RegExp('^[0-9]{3}-[0-9]{3}$').test(digit)) {
            let rangeFrom = digit.split('-')[0];
            const rangeTo = digit.split('-')[1];
            const digitArray = [];
            while (rangeFrom <= rangeTo) {
                digitArray.push(rangeFrom);
                ++rangeFrom;
            }
            return digitArray;
        }
        return digit;
    }).flat();
}

function getRandomPhoneNumber() {
    const digitsArray = digitsToArray();
    let phoneNumber = String(digitsArray[getRandomNumber(digitsToArray().length)]);
    while (phoneNumber.length < 8) {
        phoneNumber = phoneNumber.concat(String(getRandomNumber(10)));
    }
    return phoneNumber;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    digitsToArray, getRandomPhoneNumber, getRandomNumber
}