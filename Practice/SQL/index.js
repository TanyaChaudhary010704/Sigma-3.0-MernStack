const { faker } = require("@faker-js/faker");
const mysql2 = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "tanya@01",
});

app.get("/", (req, res) => {
  //total no of users on app
  let q = "select count(*) from user";
  try {
  connection.query(q,(err, result) => {
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
  });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

app.listen("8080", () => {
  console.log("Server listening on port: 8080");
});


// try {
//   connection.query(q, [data],(err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
//connection.end();