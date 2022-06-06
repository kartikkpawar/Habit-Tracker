const HabitSchema = require("../models/habit");

// getting all habits
exports.getAllhabits = async (req, res) => {
  const habits = await HabitSchema.find();
  return res.render("home", { habits });
};

// getting all habits for streak
exports.getAllStreaks = async (req, res) => {
  const habits = await HabitSchema.find();
  return res.render("streak", { habits });
};

exports.addHabit = async (req, res) => {
  const { habit, goal } = req.body;
  // checnking if habit alredy exists
  const habitExists = await HabitSchema.find({ habit });
  if (habitExists.length > 0) return res.send({ msg: "habit exists" });

  // creaeting the habit
  const newHabit = new HabitSchema({ habit, goal });
  newHabit.save();
  return res.redirect("back");
};

// deleting the habit
exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  await HabitSchema.findByIdAndDelete(id);
  return res.redirect("/");
};

// updating the habit status
exports.updateHabtit = async (req, res) => {
  const { id, day, status } = req.query;
  const habit = await HabitSchema.findById(id);

  if (status === "DONE") {
    habit.days[day] = "NOTDONE";
    habit.streak--;
  }
  if (status === "NOTDONE") {
    habit.days[day] = "NONE";
  }
  if (status === "NONE") {
    habit.days[day] = "DONE";
    habit.streak++;
  }

  habit.save();
  return res.redirect("back");
};
