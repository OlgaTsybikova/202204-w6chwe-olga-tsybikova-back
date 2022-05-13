const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: URL,
  },
  characteristics: [{ speed: Number, resistence: Number, birth: Date }],
});

const Robot = model("Robot", RobotSchema);

module.exports = Robot;
