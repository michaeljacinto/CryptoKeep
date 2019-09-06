const mongoose = require("mongoose");
const config = require("config");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id
    },
    config.get("myprivatekey")
  );
  return token;
};

// validates user
function validateUser(user) {
  const schema = {
    username: Joi.string()
      .min(3)
      .max(50)
      .required(),
    password: Joi.string()
      .min(3)
      .max(50)
      .required()
  };

  return Joi.validate(user, schema);
}

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validateUser = validateUser;
