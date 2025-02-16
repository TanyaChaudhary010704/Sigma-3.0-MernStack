//Q1
const arrayAverage = (arr) => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg/arr.length;
}
//Q2
const even = (a) => a % 2 == 0 ;
//Q3
const object = {
  message: 'Hello world',
  logMessage() {
    console.log(this);
  }
};
setTimeout(object.logMessage, 1000);
//Q4
let length = 4;
function callback() {
  console.log(this.length);

}
const obj = {
  length: 5,
  method(callback) {
    callback();
  },
};
obj.method(callback,1,2);