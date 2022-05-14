require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const debug = require("debug")("robots-api:server");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(`Server is on port ${port}`);
    server.on("error", (error) => {
      debug(chalk.blue("There is a problem with your server"));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`Port ${port}busy`));
      }
    });
  });
};
module.exports = initializeServer;
