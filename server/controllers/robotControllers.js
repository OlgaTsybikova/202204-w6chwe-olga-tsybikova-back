require("dotenv").config();
const debug = require("debug")("robot-api:controller");
const chalk = require("chalk");
const Robot = require("../../db/model/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
  debug(chalk.yellow("Robots request received"));
};

module.exports = { getRobots };
