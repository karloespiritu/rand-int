'use strict';

module.exports = function (min, max) {

  if (arguments.length === 1) {
    max = min
    min = 0
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }

  if (min < 0 ||  max < 0 || max <= min) {
    throw new RangeError('All arguments must be >= 0 and max >= min');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}