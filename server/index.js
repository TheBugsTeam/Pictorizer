const express = require("express");
const dotenv = require("dotenv").config({ path: "./server/config/.env" });

const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extented: false }));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
