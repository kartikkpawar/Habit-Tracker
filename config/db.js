require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB)
  // .connect("mongodb://localhost:27017/habitTracker")
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log("Unable to connect to DB"));
