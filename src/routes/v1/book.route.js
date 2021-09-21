const express = require("express");
const validate = require("../../middlewares/validate");
const bookValidation = require("../../validations");
const bookController = require("../../controllers");

const router = express.Router();

router.post(
  "/createbook",
  validate(bookValidation.createBook),
  bookController.createBook
);

module.exports = router;
