const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  const additionStr = additionRepeatTimes > 0
    ? Array(additionRepeatTimes).fill(addition).join(additionSeparator)
    : '';

  const result = [];

  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str) + additionStr);
  }

  return result.join(separator);
}

module.exports = {
  repeater
};
