require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robot-api:root");
const { port } = require("./cli/index");
const { connectDB } = require("./db/index");
const { initializeServer } = require("./server/initializeServer");

(async () => {
  try {
    await connectDB(process.env.MONGO_STRING);
    await initializeServer(port || process.env.SERVER_PORT || 4000);
  } catch {
    debug(chalk.red("Error found on server"));
  }
})();
