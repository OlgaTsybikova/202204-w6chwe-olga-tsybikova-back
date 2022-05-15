require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { robotRouter } = require("./routers/robotRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/robots", robotRouter);
module.exports = app;
