const express = require("express");
const cors = require("cors");

//FIXME must be ADDED for production
const path = require("path");

//FIXME must be deleted for production
const dotenv = require("dotenv").config({ path: "./server/config/.env" });

const connectDB = require("./config/db");

const app = express();

connectDB();

//FIXME must be deleted for production
if (dotenv.error) {
  throw dotenv.error;
}

const PORT = process.env.PORT || 5000;

app.use(express.json({ extented: false }));
app.use(cors());

//FIXME must be deleted for production
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/login", require("./routes/api/loginUser"));
app.use("/api/games", require("./routes/api/games"));
app.use("/api/steam", require("./routes/api/steam"));
app.use("/api/autocomplete", require("./routes/api/search/autocomplete"));
app.use("/api/samples", require("./routes/api/getRandomSamples"));
app.use("/api/lasts", require("./routes/api/getLastSamples"));
app.use("/update/newupdater", require("./routes/updater/updateGames"));

//FIXME must be ADDED for production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("public/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
//   });
// }

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
