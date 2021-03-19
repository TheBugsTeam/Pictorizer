const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { registrationValidation } = require("../../validation/joi_validations");
const User = require("../../models/User");

router.post("/", async (req, res) => {
  if (dotenv.error) {
    throw dotenv.error;
  }

  const { error } = registrationValidation(req.body);

  const { name, email, password } = req.body;

  if (error) return res.status(400).json({ errors: error.details[0].message });

  try {
    let user = await User.findOne({ email });

    if (user) {
      console.error("User already exists");
      return res.status(400).json({ errors: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
