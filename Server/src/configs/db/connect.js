const mongoose = require("mongoose");
require("dotenv").config();
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Admin:admin123@cluster1.k4cw1sv.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect Succesfully");
  } catch (error) {
    console.log("Connect Fail", error);
  }
}

module.exports = { connect };
