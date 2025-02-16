const express = require("express");
const app = express();
const port = 8080;
4;
//for parsing data so that express can understand
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`Standard get response. Welcome ${user}`);
});
app.post("/register", (req, res) => {
  let { user, pass } = req.body;
  res.send(`Standard post response. Welcome ${user}`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
