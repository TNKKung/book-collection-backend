const joi = require("joi");

const register = {
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

const login = {
  body: joi.object().keys({
    email : joi.string().required(),
    password : joi.string().required(),
  }),
};

const logout = {
  body: joi.object().keys({
    refreshToken: joi.string().required(),
  }),
};

const refreshTokens = {
  body: joi.object().keys({
    refreshToken: joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
};
