module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("update-token");

  if (!token) return res.status(401).json({ msg: "Nope" });

  if (token == process.env.UPDATE_TOKEN) {
    next();
  } else {
    res.status(401).json({ msg: "Nope" });
  }
};
