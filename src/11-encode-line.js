/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArray = str.split('');
  let counter = 0;
  let letter = '';
  for (let i = 0; i < strArray.length; i++) {
    if (i !== strArray.length && strArray[i] === strArray[i + 1]) {
      counter++;
    } else {
      if (counter) letter += `${counter + 1}`;
      letter += `${strArray[i]}`;
      counter = 0;
    }
  }
  return letter;
}

module.exports = encodeLine;
