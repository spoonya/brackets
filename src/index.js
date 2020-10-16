module.exports = function check(str, bracketsConfig) {
  const CFG = bracketsConfig.map((el) => el.join``);
  const CFG_LEN = CFG.length;

  for (let i = 0; i < CFG_LEN; i++) {
    while (str.includes(CFG[i])) {
      str = str.replace(CFG[i], '');
      i -= CFG_LEN;
    }
  }

  return str === '';
}
