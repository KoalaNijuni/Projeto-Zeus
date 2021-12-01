const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  try {
    mongoose.connect(process.env.MongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on("connected", (_) => {
      console.log("Application connected to the database");
    });
  } catch (err) {
    console.log(err);
  }
};
