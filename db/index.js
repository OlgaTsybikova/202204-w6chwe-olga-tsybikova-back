const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("robots-api:server");

const connectDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
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

module.exports = connectDB;
