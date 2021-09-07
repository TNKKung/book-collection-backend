const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const User = require("./services/user.service");

const port = config.PORT || 3003;
app.use(express.json());

mongoose.connect(config.database);

app.route("/").post(async (req, res) => {
  console.log(req.body);
  const user = await User.createUser(req.body);
  return res.send(user);
});

app.listen(port, () => {
  console.log("server is running port : ", port);
});
