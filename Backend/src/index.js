const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("./database/db")();

app.use(express.json());
app.use(cors());
const PORT = 3002;

app.all("*", require("./routes/routes"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Congratulations, you are running on port ${PORT}!`);
});
