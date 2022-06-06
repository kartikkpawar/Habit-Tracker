require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB)
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log("Unable to connect to DB"));
