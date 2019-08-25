const router = require("express").Router();
const { User, validateUser } = require("../models/userModel");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const express = require("express");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.get("/auth", async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/add", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const error = validateUser(req.body);

  if (error.error !== null) {
    return res.status(400).send(error.error.details[0].message);
  }

  let existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) return res.status(400).send("Username already exists.");

  const user = new User({
    username,
    password
  });

  user.password = await bcrypt.hash(user.password, 10);

  user
    .save()
    .then(() => res.json("New user added!"))
    .catch(err => res.status(400).json("Error creating user: " + err));

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send({
    _id: user._id,
    username: user.username,
    password: user.password
  });
});

module.exports = router;
