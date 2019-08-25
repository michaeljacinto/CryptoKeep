const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user.route");
const config = require("config");

if (!config.get("myprivatekey")) {
  console.error("Private key is undefined");
  process.exit(1);
}

// have environment variables in .env file
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection successful");
});

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
