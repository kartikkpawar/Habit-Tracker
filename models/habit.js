const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },

  streak: {
    type: Number,
    default: 0,
  },
  days: {
    one: {
      type: String,
      default: "NONE",
    },
    two: {
      type: String,
      default: "NONE",
    },
    three: {
      type: String,
      default: "NONE",
    },
    four: {
      type: String,
      default: "NONE",
    },
    five: {
      type: String,
      default: "NONE",
    },
    six: {
      type: String,
      default: "NONE",
    },
    seven: {
      type: String,
      default: "NONE",
    },
  },
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
