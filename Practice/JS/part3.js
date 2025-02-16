//Q1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(0, 5));
//Q2
console.log(arr.slice(-5));
//Q3
let str = "";
if (str.length == 0) {
  console.log("null");
}
else {
  console.log("Not null");
}
//Q4
let name = "TanyA";
let idx = 0;
if (name[idx]>='a'&&name[idx]<='z') {
  console.log("Lower Case");
}
else {
  console.log("Upper Case");
}
//Q5
console.log(name.trim());
//Q6
console.log(arr.includes(11));