const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
let BOOKS = require("./data/books");
let CATEGORIES = require("./data/categories");

const app = express();
const port = 3000;

app.use(bodyParser({ limit: "500mb" }));
app.use(bodyParser.json());
app.use(cors());

app.get("/books", (req, res) => {
  res.send(BOOKS);
});

app.get("/books/:id", (req, res) => {
  const result = BOOKS.find(({ id }) => id === req.params.id);

  if (result) {
    res.send(result);
  } else {
    res.sendStatus(404);
  }
});

app.get("/categories", (req, res) => {
  res.send(Object.values(CATEGORIES));
});

app.post("/books", (req, res) => {
  BOOKS.push({ id: uuidv4(), ...req.body });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
