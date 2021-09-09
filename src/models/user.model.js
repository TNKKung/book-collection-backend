const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const userSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, private: true },
  birth_date: { type: String, trim: true },
  tell: { type: String, trim: true },
  address : {type: String, trim: true}
});

userSchema.plugin(toJSON); //convert mongoose to JSON

userSchema.statics.isUsernameTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
