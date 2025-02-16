let num = 200;
if (num % 10 === 0) {
  console.log("good");
}
else {
  console.log("bad");
}
//Q2
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`);
//Q3
let quarter = 3;
switch (quarter) {
  case 1:
    console.log("January,February,March");
    break;
  case 2:
    console.log("April,May,June");
    break;
  case 3:
    console.log("July,August,September");
    break;
  case 4:
    console.log("October,November,December");
    break;
  default:
    console.log("Invalid quarter");
}
//Q4
let str = "aBCZabc";
if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
  console.log("Golden String")
}
else {
  console.log("Not a Golden String")
}
//Q5
let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest = null;
if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  }
  else {
    largest = num3;
  }
}
else {
  if (num2 >= num3) {
    largest = num2;
  }
  else {
    largest = num3;
  }
}
console.log(`Largest num:${largest}`);
//Q6
let n1 = 31;
let n2 = 47852;
if (n1 % 10 === n2 % 10) {
  console.log("Same last digit");
}
else {
  console.log("Different last digit");
}