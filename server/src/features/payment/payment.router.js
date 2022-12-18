require("dotenv").config();
const express = require("express");
const orderModel = require("./payment.model");
const app = express.Router();

const Razorpay = require("razorpay")

//return res.redirect(301, "https://www.google.co.in/").send();

app.get("/get-razorpay-key", async (req, res) => {
  try {
    return res.send({ key: process.env.RAZORPAY_KEY_ID });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/create-order", async (req, res) => {
  try {
    console.log("ceate-orders");
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) {
      return res.status(500).send("some error occured");
    }
    console.log(order, "backend amount passage");
    return res.status(200).send({ message: "reached orders", order });
  } catch (er) {
    return res.status(404).send("query Not found");
  }
});

app.post("/pay-order", async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newPayment = orderModel({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newPayment.save();
    return res.status(200).send({ message: "new payment Successfull" });
  } catch (er) {
    console.log(er.message);
    return res.status(500).send(er.message);
  }
});

app.get("/list-order", async (req, res) => {
  console.log(req)
  try {
    const list = await orderModel.find();
    console.log("backend get orders");
    return res.status(200).send(list);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

module.exports = app;