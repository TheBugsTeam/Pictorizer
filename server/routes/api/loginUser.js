const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./server/config/.env" });
const router = express.Router();

const auth = require("../../middleware/auth");
const User = require("../../models/User");

const { loginValidation } = require("../../validation/joi_validations");

//Get the user's data
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Login route
router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  else {
    const { email, password } = req.body;

    try {
      //See if email exsists
      let user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ error: "Email or password is wrong" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ error: "Email or password is wrong" });

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
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
});

module.exports = router;
