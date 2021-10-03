const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");

const router = express.Router();
router
  .route("/")
  .get(validate(userValidation.getUser), userController.getUser)
  .patch(validate(userValidation.updateUser), userController.updateUser);

module.exports = router;
