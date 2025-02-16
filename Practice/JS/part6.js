//Q1
let n = 3;
let arr = [1, 2, 3, 4, 5];
function findLarger(arr, n) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
  return ans;
}
// findLarger(arr, n);
//Q2

let str = "abcdabcdefghgggghhhf";
function getUnique(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (ans.indexOf(curr) === -1) {
      ans+=curr;
    }
  }
  console.log(ans);
  return ans;
}
getUnique(str);

//Q3
function maxLength() {
  let country = [];
  let m = prompt("Enter number of country");
  while (m) {
    country.push(prompt("Enter country name"));
    m--;
  }
  let max = 0;
  let idx = 0;
  for (let i = 0; i < country.length; i++) {
    if (country[i].length > max) {
      max = country[i].length;
      idx = i;
    }
  }
  console.log(country[idx]);
}
// maxLength(country,m);

//Q4
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      count++;
    }
  }
  console.log(count);
}
countVowels("Tanyaoui");

//Q5
function generateRandom(start, end) {
  let diff = end - start;
  let rand = Math.floor(Math.random() * diff) + start;
  console.log(rand);
}
generateRandom(10,20);
