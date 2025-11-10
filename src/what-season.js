const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || 
      Object.prototype.toString.call(date) !== '[object Date]' ||
      isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if ([11, 0, 1].includes(month)) {
    return 'winter';
  } else if ([2, 3, 4].includes(month)) {
    return 'spring';
  } else if ([5, 6, 7].includes(month)) {
    return 'summer';
  } else if ([8, 9, 10].includes(month)) {
    return 'autumn';
  }
}


module.exports = {
  getSeason
};
