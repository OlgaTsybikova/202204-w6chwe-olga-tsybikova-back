require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robot-api:db");
const mongoose = require("mongoose");

const connectDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        debug(chalk.red("ERROR", error.message));
        reject();
        return;
      }
      debug(chalk.red("connectado a la DB"));
      resolve();
    });
  });

module.exports = { connectDB };
