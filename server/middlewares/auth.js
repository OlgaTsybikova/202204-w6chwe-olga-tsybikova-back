const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization.includes("Bearer ")) {
      throw new Error();
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRETO);
    next();
  } catch {
    const customError = new Error("Invalid token here");
    customError.statusCode = 401;
    next(customError);
  }
};
module.exports = auth;
