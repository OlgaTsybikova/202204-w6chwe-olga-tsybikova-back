const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  speed: {
    type: Number,
  },
  resilience: {
    type: Number,
  },
  created: {
    type: Number,
  },
});

const Robot = model("Robot", RobotSchema, "robots");
module.exports = Robot;
