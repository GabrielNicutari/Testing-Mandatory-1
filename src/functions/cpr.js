const generatetDateOfBirth = (date) => {
  // eslint-disable-next-line
  const _date = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = String(date.getFullYear()).slice(-2);
  const dob = [_date, month, year].join('');
  return dob;
};

const randomIntFromInterval = () => Math.floor(Math.random() * 9);

const lastCprDigit = (gender) => {
  const last = randomIntFromInterval();

  if (gender === 'female' && last % 2 !== 0) {
    return lastCprDigit(gender);
  }
  if (gender === 'male' && last % 2 === 0) {
    return lastCprDigit(gender);
  }
  return last;
};

const generateRandomDate = () => {
  const from = new Date(1900, 0, 0).getTime();
  const to = new Date(Date.now()).getTime();
  return new Date(from + Math.random() * (to - from));
};

const generateLastFour = (gender) => {
  const firstThree = (`${Math.random()}`).substring(2, 5);
  const last = lastCprDigit(gender);
  return firstThree.concat(last);
};

module.exports.generateCPR = (gender) => {
  const date = generateRandomDate();
  const dob = generatetDateOfBirth(date);
  const lastFour = generateLastFour(gender);
  return { cpr: String(dob + lastFour) };
};

module.exports.getDateOfBirth = (cpr) => ({ dob: cpr.substring(0, 6) });
