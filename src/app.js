const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");

const config = require("./config/config");
const validate = require("./middlewares/validate");
const authValidation = require("./validations/auth.validation");
const authController = require("./controllers/auth.controller");
const {jwtStrategy} = require("./config/passport");

const port = config.PORT || 3003;
app.use(express.json());
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

mongoose.connect(config.database);

const router = express.Router();
app.post('/', validate(authValidation.register), authController.register);

app.listen(port, () => {
  console.log("server is running port : ", port);
});
