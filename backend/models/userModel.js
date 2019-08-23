const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    index: true,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  wallets: {
    type: Array,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
