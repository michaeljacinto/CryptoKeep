const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route");

// // have environment variables in .env file
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// allows us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successful");
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
