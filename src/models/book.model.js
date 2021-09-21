const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
const bcrypt = require("bcryptjs");

const bookSchema = new mongoose.Schema({
  owner_id: { type: String, trim: true },
  book_name: { type: String, trim: true },
  categories: { type: String, trim: true },
  owner_name: { type: String, trim: true },
  email: { type: String, trim: true },
  tell: { type: String, trim: true },
});

bookSchema.plugin(toJSON); //convert mongoose to JSON

bookSchema.statics.isEmailToken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

bookSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

bookSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
