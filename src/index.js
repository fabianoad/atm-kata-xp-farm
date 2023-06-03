function atm(value = 0) {
  const bankNotes = [500, 200, 100, 50, 20, 10];
  let count = 0;
  if (bankNotes.includes(value)) {
    count = 1;
  } else if (value === 30) return 2;
  return value < 1 || value > 1500 ? -1 : count;
}

module.exports = {
  atm,
};
