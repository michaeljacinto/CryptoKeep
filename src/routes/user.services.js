const config = require("../../config.json");
const jwt = requre("jsonwebtoken");
const bcrypt = require("bcrypt");
const _db = require("../utils/utils");
const db = _db.init();
const User = require("../models/user.model");

module.exports = {
  authenticate
};

async function register(userData) {
  if (await User.findOne({ username: userData.username })) {
    throw 'Username "' + userData.username + '"is already taken';
  }

  const user = new User(userData);

  if (userData.password) {
    user.hash = bcrypt.hashSync(userData.password, 10);
  }

  await user.save();
}
