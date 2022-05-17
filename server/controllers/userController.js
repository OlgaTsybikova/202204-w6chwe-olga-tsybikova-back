/* eslint-disable no-underscore-dangle */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../db/model/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    const error = new Error("Username or password is wrong");
    error.code = 403;
    next(error);
  } else {
    const passwordCorrect = await bcrypt.compare(password, user.password);
    const userData = {
      username: user.username,
      id: user.id,
    };
    if (!passwordCorrect) {
      const error = new Error("Password is wrong...Please, try again...");
      error.code = 403;
      next(error);
    } else {
      const token = jwt.sign(userData, process.env.JWT_SECRETO);
      res.json(token);
    }
  }
};
module.exports = { loginUser };
