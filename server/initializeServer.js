require("dotenv").config();
const debug = require("debug")("robot-api:initialize");
const chalk = require("chalk");
const app = require("./index");
const { robotRouter } = require("./routers/robotRouter");

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(`Server is on port ${port}`);
  });

  server.on("error", (error) => {
    debug(chalk.blue("There is a problem with your server"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`Port ${port}busy`));
    }
  });
};
app.use("/", robotRouter);
module.exports = { initializeServer };
