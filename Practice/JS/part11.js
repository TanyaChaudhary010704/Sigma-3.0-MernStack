//call back hell
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    console.log(color);
    if (nextColorChange) {
      nextColorChange();
    }
  }, delay);
}
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("blue", 1000, () => {
//       changeColor("yellow", 1000);
//     })
//   })
// });

//Promises(Improved Version 1)
function changeColor2(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(color);
      resolve("color changed");
    }, delay);
  })
}
// changeColor2("red", 1000).then((result) => {
//   changeColor2("green", 1000).then((result) => {
//     changeColor2("blue", 1000).then((result) => {
//       changeColor2("yellow", 1000)
//     })
//   })
// }).catch((e) => {
//   console.log(e);
// });

//Promises(Improved Version 2)
// changeColor2("red", 1000).then((result) => {
//   console.log(result);
//   return changeColor2("green", 1000);
// }).then((result) => {
//   console.log(result);
//   return changeColor2("yellow", 1000);
// }).then((result) => {
//   console.log(result);
//   return changeColor2("blue", 1000);
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

//Async and Await
async function demo() {
  await changeColor2("red", 1000);
  await changeColor2("yellow", 1000);
  await changeColor2("green", 1000);
  await changeColor2("blue", 1000);
}
//demo();