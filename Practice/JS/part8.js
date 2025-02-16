//Q1
let arr = [1, 2, 3, 4];
let sqSum = arr.reduce((res, el) => res + (el * el));
console.log(sqSum);
//Q2
let plus5 = arr.map((el) => el + 5);
console.log(plus5);
//Q3
let arr2 = ["Tanya", "Tanisha", "Riya", "Shtakshi"];
let upper = arr2.map((el) => el.toUpperCase());
console.log(upper);
//Q4
function doubleAndReturnArgs(arr, ...args) {
  arr.push(...args.map((el) => el*2));
  console.log(...arr);
}
doubleAndReturnArgs([1, 2, 3, 4,], 5, 6, 7, 8); 
//Q5
const obj1 = {
  key1: 'value1',
  key2: 'value2',
};
const obj2 = {
  key3: 'value3',
  key4: 'value4',
};
const merge = { ...obj1, ...obj2 };
console.log(merge);