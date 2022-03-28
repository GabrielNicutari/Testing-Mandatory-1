const generatetDateOfBirth = (date) => {
  // eslint-disable-next-line
  const _date = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = String(date.getFullYear()).slice(-2);
  const dob = [_date, month, year].join('');
  return dob;
};

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomOddIntFromInterval = (min, max) => {
  // eslint-disable-next-line
  if (min % 2 === 0) ++min;
  return min + 2 * randomIntFromInterval(0, (max - min) / 2);
};

const randomEvenIntFromInterval = (min, max) => {
  // eslint-disable-next-line
  if (min % 2 !== 0) ++min;
  return min + 2 * randomIntFromInterval(0, (max - min) / 2);
};

const generateRandomDate = () => {
  const from = new Date(1900, 0, 0).getTime();
  const to = new Date(Date.now()).getTime();
  return new Date(from + Math.random() * (to - from));
};

const generateLastFour = (gender) => {
  const firstThree = (`${Math.random()}`).substring(2, 5);
  let last = randomIntFromInterval(0, 9);
  if (gender === 'female' && last % 2 !== 0) {
    last = randomEvenIntFromInterval(0, 9);
  } else if (gender === 'male' && last % 2 === 0) {
    last = randomOddIntFromInterval(0, 9);
  }
  return String(firstThree + last);
};

module.exports.generateCPR = (gender) => {
  const date = generateRandomDate();
  const dob = generatetDateOfBirth(date);
  const lastFour = generateLastFour(gender);
  return { cpr: String(dob + lastFour) };
};

module.exports.getDateOfBirth = (cpr) => ({ dob: cpr.substring(0, 6) });
