require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

// EJS Config
//EJS Config
app.set("view engine", "ejs");
app.use(express.static("public"));

// middlewares
app.use(bodyParser.json());

// Routes
app.use(require("./routes/habit"));

app.listen(PORT, () => console.log("Server running on", PORT));
