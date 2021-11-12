const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${"koala22"}:${"koala123"}@cluster0.x7m3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected Succesfully");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3001, () => {
  console.log("Congratulations, you are running on port 3001!");
});
