const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { bookService } = require("../services");

const createBook = catchAsync(async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send({ book });
});

module.exports = {
  createBook,
};
