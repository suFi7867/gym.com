const mongoose = require("mongoose");
const file = {
  productName: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: String, require: true },
  email: { type: String, require: true },
};
const cartSchema = new mongoose.Schema(file, { versionKey: false });
const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;
