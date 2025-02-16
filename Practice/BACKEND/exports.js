//require
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const pi = 3.14;

// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.pi = 3.14;

// const obj = {
//   sum: sum,
//   mul: mul,
//   pi:pi
// }
// module.exports = {
//   sum: sum,
//   mul: mul,
//   pi:pi
// }
// module.exports = obj;

//import->instead of require
export const sum2 = (a, b) => a + b;
export const mul2 = (a, b) => a * b;
