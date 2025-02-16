// Q1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);
// Q2
let number = 287152;
let count = 0;
while (number > 0) {
  count ++;
  number = Math.floor(number/10);
}
console.log(count);
// Q3
let number2 = 287152;
let sum = 0;
while (number2 > 0) {
  let digit = number2 % 10;
  sum += digit;
  number2 = Math.floor(number2/10);
}
console.log(sum);
//Q4
let fact = 1;
let n = 7;
while (n > 0) {
  fact *= n;
  n--;
}
console.log(fact);
// Q5
let arr2 = [1, 2, 3, 4, 5, 6, 2, 3];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}
console.log(max);