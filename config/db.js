const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/habitTracker")
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log("Unable to connect to DB"));
