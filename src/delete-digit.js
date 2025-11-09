const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = String(n);
  let maxNumber = 0;
  for (let i = 0; i < strNum.length; i++) {
    const newNumStr = strNum.slice(0, i) + strNum.slice(i + 1);
    const newNum = parseInt(newNumStr, 10);
    if (newNum > maxNumber) {
      maxNumber = newNum;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
