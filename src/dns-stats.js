const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {};
  for (let i = 0; i < domains.length; i+=1){
    const parts = domains[i].split('.')
    let suffix = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      suffix =  suffix + '.' + parts[i];

      if (result[suffix] === undefined) {
          result[suffix] = 1;
        } else {
          result[suffix] += 1;
        }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
