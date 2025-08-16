// DATABASE CONNECTION

const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.ATLAS_URL);
    console.log("😎 MongoDB Connected Successfully");
  } catch (err) {
    console.log("Connection Failed", err.message);
  }
};

module.exports = dbConnect;
