const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
const bcrypt = require("bcryptjs");
const { roles } = require("../config/roles");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, private: true },
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  birth_date: { type: String, trim: true },
  tell: { type: String, trim: true },
  address: { type: String, trim: true },
  role: { type: String, enum: roles, default: "user" },
});

userSchema.plugin(toJSON); //convert mongoose to JSON

userSchema.statics.isEmailToken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
