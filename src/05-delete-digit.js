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
  let result = 0;
  let newNum = n.toString().split('');
  for (let i = 0; i < newNum.length; i++) {
    newNum.splice(i, 1);
    if (+newNum.join('') > result) {
      result = +newNum.join('');
    }
    newNum = n.toString().split('');
  }
  return result;
}

module.exports = deleteDigit;
