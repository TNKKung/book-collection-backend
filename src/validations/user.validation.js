const joi = require("joi");

const createUser = {
  body: joi.object().keys({
    email: joi.string().required().email(),
    password: joi.string().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    birth_date: joi.string().required(),
    tell: joi.string().required(),
    address: joi.string().required(),
    role: joi.string().required().valid("user", "admin"),
  }),
};
const getUser = {
  query: joi.object().keys({
    email: joi.string(),
    first_name: joi.string(),
    last_name: joi.string(),
    birth_date: joi.string(),
    tell: joi.string(),
    address: joi.string(),
  }),
};

const updateUser = {
  body: joi.object().keys({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    birth_date: joi.string().required(),
    tell: joi.string().required(),
    address: joi.string().required(),
  }),
};

module.exports = {
  createUser,
  updateUser,
  getUser,
};
