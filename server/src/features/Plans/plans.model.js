const mongoose = require("mongoose");
const file = {
  name: String,
  image: String,
  desc: String,
  type: String,
  gender: String,
  duration: String,
  qty: Number,
  price: Number,
};
const planSchema = new mongoose.Schema(file, { versionKey: false });
const planModel = mongoose.model("plan", planSchema);
module.exports = planModel;
