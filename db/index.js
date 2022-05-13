const mongoose = require("mongoose");
require("debug")("dogs-api_db:root");

const connectDB = async () => {
  await mongoose.connect("MONGO_STRING");
};
