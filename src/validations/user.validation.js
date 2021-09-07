const Yup = require("yup");

const createUser = {
  body: Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birth_date: Yup.string().required(),
    tell: Yup.string().required(),
    address: Yup.string().required(),
  }),
};
const getUsers = {
  body: Yup.object().shape({
    email: Yup.string().required().email(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birth_date: Yup.string().required(),
    tell: Yup.string().required(),
    address: Yup.string().required(),
  }),
};

const updateUser = {
  body: Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    birth_date: Yup.string().required(),
    tell: Yup.string().required(),
    address: Yup.string().required(),
  }),
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
};
