const express = require("express");
const router = express.Router();

const { registrationValidation } = require("../../validation/joi_validations");

router.post("/", (req, res) => {
  console.log(req.body);

  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

module.exports = router;
