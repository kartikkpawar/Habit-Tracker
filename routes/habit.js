const express = require("express");
const {
  getAllhabits,
  getAllStreaks,
  addHabit,
  deleteHabit,
  updateHabtit,
} = require("../controllers/habit");
const router = express.Router();

// all habits
router.get("/", getAllhabits);

router.get("/streak", getAllStreaks);

// add new habit
router.post("/addHabit", addHabit);

// delete habit
router.post("/deleteHabit/:id", deleteHabit);

// updating habit status
router.post("/updateHabtit", updateHabtit);

module.exports = router;
