const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname:{type:String},
    lastname:{type:String},
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);