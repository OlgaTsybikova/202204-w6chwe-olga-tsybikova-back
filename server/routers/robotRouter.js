const express = require("express");
const { getRobots } = require("../controllers/robotControllers");

const robotRouter = express.Router();
robotRouter.get("/robots", getRobots);

module.exports = { robotRouter };
