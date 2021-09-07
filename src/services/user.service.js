const httpStatus = require("http-status");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

const createUser = async (userBody) => {
  if (await User.isUsernameTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Username already taken");
  }
  return User.create(userBody);
};

module.exports = { createUser };
