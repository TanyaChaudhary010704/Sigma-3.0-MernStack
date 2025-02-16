let url = "https://catfact.ninja/fact";
let url2 = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// fetch(url)
//   .then((res) => {
//     console.log("1");
//     console.log(res)
//     res.json().then((data) => {
//       console.log(data.fact);
//     }) 
//   })
//   .catch((err) => {
//     console.log(err);
//   });
 
async function getAPI() {
  try {
    console.log("2");
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  }
  catch (err) {
    console.log(err);
  }
}  
//getAPI();
async function getAPI2() {
  try {
    console.log("3");
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url,config);
    console.log(res.data.fact);
  }
  catch (err) {
    console.log(err);
  }
}  
//getAPI2();

async function getUrl2() {
  try {
    let res = await axios.get(url2);
    console.log(res);
    console.log(res.data.setup);
    console.log(res.data.delivery);
  }
  catch (err) {
    console.log(err);
  }
}  
getUrl2();