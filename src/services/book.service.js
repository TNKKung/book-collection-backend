const httpStatus = require("http-status");
const { Book } = require("../models");
// const ApiError = require("../utils/ApiError");

const createBook = async (userBody) => {
  return Book.create(userBody);
};
const getUserById = async (id) => {
  return User.findById(id);
};


module.exports = {
  createBook,
  getUserById,
};
