/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];

  names.forEach((elem) => {
    if (result.indexOf(elem) === -1) {
      result.push(elem);
    } else if (result.indexOf(`${elem}(1)`) === -1) {
      result.push(`${elem}(1)`);
    } else {
      let v = 2;
      while (result.indexOf(`${elem}(${v})`) !== -1) {
        v += 1;
      }
      result.push(`${elem}(${v})`);
    }
  });
  return result;
}

module.exports = renameFiles;
