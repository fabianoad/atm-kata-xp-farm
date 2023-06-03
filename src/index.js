function atm(value) {
  const bankNotes = [500, 200, 100, 50, 20, 10];
  if (!Number(value)) return -1;
  let count = 0;
  if (bankNotes.includes(value)) {
    return 1;
  }
  for (let i = 0; i < bankNotes.length; i += 1) {
    if (bankNotes[i] <= value) {
      // eslint-disable-next-line no-param-reassign
      value -= bankNotes[i];
      count += 1;
      i -= 1;
    }
    if (value === 0) return count;
  }

  return value < 1 || value > 1500 ? -1 : count;
}

module.exports = {
  atm,
};
