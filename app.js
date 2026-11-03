const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const data = [
  {
    name: "Michael Choi",
    createdAt: "23-01-2013",
    message:
      "This is my message. This is my message. This is my message. This is my message."
  },
  {
    name: "John Smith",
    createdAt: "15-05-2014",
    message:
      "Learning Node.js and Express is fun!"
  },
  {
    name: "Sarah Johnson",
    createdAt: "02-07-2016",
    message:
      "Welcome to my timeline post."
  }
];

app.get("/", (req, res) => {
  res.render("index", { posts: data });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});