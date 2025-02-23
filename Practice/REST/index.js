const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Tanya",
    content: "Hey! I am learning REST",
  },
  {
    id: uuidv4(),
    username: "Apna College",
    content: "We teacch millions of students",
  },
  {
    id: uuidv4(),
    username: "Tanisha",
    content: "I am a passionate problem solver",
  },
  {
    id: uuidv4(),
    username: "Riya",
    content: "I am great speaker",
  },
];

app.get("/", (req, res) => {
  res.send("Server working well");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/form", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});
app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
