const express = require("express");
const { loginUser } = require("../controllers/userController");

const userRouter = express.Router();
userRouter.post("/", loginUser);
module.exports = userRouter;
