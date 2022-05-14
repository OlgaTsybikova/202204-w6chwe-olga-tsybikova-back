require("dotenv").config();
const { program } = require("commander");

program.option("-p, --port <port>", "port");
program.parse();
const cliOptions = program.opts();

module.exports = cliOptions;
