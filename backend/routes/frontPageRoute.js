const router = require("express").Router();
const User = require("../models/userModel");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username,
    password
  });

  newUser
    .save()
    .then(() => res.json("New user added!"))
    .catch(err => res.status(400).json("Error creating user: " + err));
});

module.exports = router;
