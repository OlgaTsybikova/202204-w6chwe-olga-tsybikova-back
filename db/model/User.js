const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  psssword: {
    type: String,
    unique: true,
    required: true,
  },
});

const User = model("user", UserSchema, "users");
module.exports = User;
