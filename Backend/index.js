const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./database/db")();

app.use(express.json());
const PORT = 3000;

app.all("*", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Congratulations, you are running on port ${PORT}!`);
});
