const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
let BOOKS = require("./data/books");
let CATEGORIES = require("./data/categories");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/books", (req, res) => {
  res.send(BOOKS);
});

app.get("/categories", (req, res) => {
  res.send(Object.values(CATEGORIES));
});

app.post("/books", (req, res) => {
  BOOKS.push({ id: uuidv4(), ...req.body });
  res.send(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
