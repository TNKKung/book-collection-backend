const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { bookService, tokenService } = require("../services");

const createBook = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

module.exports = {
  createBook,
};
