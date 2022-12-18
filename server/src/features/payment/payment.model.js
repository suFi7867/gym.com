const mongoose = require("mongoose");

const file = {
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
};

const orderScheam = new mongoose.Schema(file);
const orderModel = mongoose.model("order", orderScheam);
module.exports = orderModel;