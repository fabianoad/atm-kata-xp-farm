function atm(value) {
  if (value === 100 || value === 500) return 1;
  return -1;
}

module.exports = {
  atm,
};
