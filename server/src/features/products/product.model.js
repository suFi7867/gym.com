const mongoose = require("mongoose");
const file = {
  productName: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: String, require: true },
  qty: { type: Number },
};
const productSchema = new mongoose.Schema(file, { versionKey: false });
const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
