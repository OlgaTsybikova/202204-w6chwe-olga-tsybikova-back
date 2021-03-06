require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { robotRouter } = require("./routers/robotRouter");
const auth = require("./middlewares/auth");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);
app.use("/robots", auth, robotRouter);
module.exports = app;
