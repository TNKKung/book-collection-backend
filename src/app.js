const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Schema = mongoose.Schema;
const config = require("./config/config");

const port = config.PORT || 3003;
app.use(express.json());
const UserSchema = new Schema({
  name: { type: String },
});
const model = mongoose.model("User", UserSchema);

mongoose.connect(config.database);

app.route("/").post(async (req, res) => {
  const {name,tom} = req.body;
  const data =  {name} ;
  const user = new model(data);
  const _user = await user.save();
  return res.json({ success: true, data: _user });
});

app.listen(port, () => {
  console.log("server is running port : ", port);
});
