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
  }),
};
const getUsers = {
  body: joi.object().keys({
    email: joi.string().required().email(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    birth_date: joi.string().required(),
    tell: joi.string().required(),
    address: joi.string().required(),
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
  getUsers,
};
