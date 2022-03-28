// Returns a random integer from min to max excluding max
function getRandomNumber(max = 1, min = 0) {
  // make sure passed parameters are numbers
  if (typeof (min) !== 'number' || typeof (max) !== 'number') throw new Error('Passed parameter is not a number.');
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {getRandomNumber}