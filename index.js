require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots-api:server");
const { port } = require("./cli");
const connectDB = require("./db");
const initializeServer = require("./server/initializeServer");

(async () => {
  try {
    await connectDB(process.env.MONGO_STRING);
    await initializeServer(port || process.env.SERVER_PORT || 4000);
  } catch {
    debug(chalk.red("Error found on server"));
  }
})();
