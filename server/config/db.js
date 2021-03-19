const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./server/config/.env" });

const connectDB = async () => {
  if (dotenv.error) {
    throw dotenv.error;
  }

  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
