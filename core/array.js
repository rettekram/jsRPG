/**
 * @file
 * Additional methods for Array()
 * 
 */

/**
 * Adds the elements of an array
 * 
 */
Array.prototype.sum = function () {
  for (var i = 0, sum = 0; i < this.length; sum += this[i++]);
  return sum;
};

/**
 * Finds the maximum value in an array
 * 
 */
Array.prototype.max = function () {
  return Math.max.apply({}, this)
};

/**
 * Finds the minimum value in an array
 * 
 */
Array.prototype.min = function () {
  return Math.min.apply({}, this)
};

