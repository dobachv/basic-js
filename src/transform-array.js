const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
   if (!Array.isArray(arr)) {
    return false
  }
  const result = [];
  let skipNext = false; 

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (typeof item === 'string') {
      switch (item) {
        case '--discard-next':
          if (i + 1 < arr.length) {
            skipNext = true;
          }
          break;

        case '--discard-prev':
          if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
            if (result.length > 0) {
              result.pop();
            }
          }
          break;

        case '--double-next':
          if (i + 1 < arr.length && arr[i + 1] !== undefined) {
            result.push(arr[i + 1]);
          }
          break;

        case '--double-prev':
          if (i - 1 >= 0 && arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
            result.push(result[result.length - 1]);
          }
          break;

        default:
          if (!skipNext) {
            result.push(item);
          } else {
            skipNext = false;
          }
          break;
      }
    } else {
      if (!skipNext) {
        result.push(item);
      } else {
        skipNext = false;
      }
    }
  }

  return result;
}

module.exports = {
  transform
};
