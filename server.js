const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route");
const utils = require("./src/utils/utils");

// // have environment variables in .env file
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// allows us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

app.use("/users", userRouter);

app.listen(port, () => {
  utils.init();
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
