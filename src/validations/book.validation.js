const joi = require("joi");

const createBook = {
  body: joi.object().keys({
    owner_id: joi.string().required(),
    book_name: joi.string().required(),
    categories: joi.string().required(),
    owner_name: joi.string().required(),
    email: joi.string().required(),
    tell: joi.string().required(),
  }),
};

module.exports = {
  createBook
};
