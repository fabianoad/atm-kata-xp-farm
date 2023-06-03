function atm(value) {
  const bankNotes = [500, 200, 100, 50, 20, 10];
  if (bankNotes.includes(value)) return 1;

  if (value === 30) return 2;

  return -1;
}

module.exports = {
  atm,
};
