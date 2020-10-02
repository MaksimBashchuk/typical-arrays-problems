
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return Math.min(...array);
};

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return Math.max(...array);
};

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  let b = array.length;
  return array.reduce((prev, next) => prev + next) / b;
};

// let a = [-1, -2, -3, -4];
// let b = a.reduce((pr, nx) => pr + nx);
// console.log(typeof(a.length));
