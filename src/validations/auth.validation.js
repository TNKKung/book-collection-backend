const joi = require('joi');


const register = {
  body: joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required()
  }),
};

const login = {
  body: joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
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