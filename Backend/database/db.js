const mongoose = require("mongoose");
require("dotenv").config();

const ZeusDB = async () => {
  try {
    const db = mongoose.connect(process.env.MongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on("connected", (_) => {
      console.log("Application connected to the database");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = ZeusDB;
