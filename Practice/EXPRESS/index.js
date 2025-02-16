const express = require('express');
const app = express();
console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.get('/', (req,res) => {
  res.send("you contacted root path");
})
// app.get('/help', (req,res) => {
//   res.send("you contacted help path");
// })
// app.get('/search', (req,res) => {
//   res.send("you contacted search path");
// })
// app.get('*', (req,res) => {
//   res.send("this path is invalid");
// })
// app.get('/:username/:id', (req, res) => {
//   let { username, id } = req.params;
//   console.log(req.params)
//   res.send(`Welcome to page of ${username}`);
// })
app.get('/search', (req, res) => {
  let { q } = req.query;
  console.log(req.query)
  res.send(`Query is ${q}`);
})
// app.use((req, res) => {
//   console.log("new request");
//   // res.send("This is a response");
//   // res.send(
//   //   {name: "Tanya",
//   //   color: "Yellow",}
//   // )
//   res.send("<h1>Tanya</h1>")
// });