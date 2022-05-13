const initializeServer = require("./server/initializeServer");
require("dotenv").config();

const port = process.env.SERVER_PORT || 4000;

initializeServer(port);
