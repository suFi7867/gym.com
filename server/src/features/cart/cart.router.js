const express = require("express");
const cartModel = require("./cart.model");
const app = express.Router();
app.post("/", async (req, res) => {
  const { productName, price, image, email } = req.body;
  if (!productName || !price || !image || !email) {
    return res.status(403).send("Missing Entities");
  }
  try {
    let singleProduct = await cartModel.create({
      productName,
      price,
      image,
      email,
    });
    return res.status(200).send({ message: "ADDED TO CART", singleProduct });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    let data = await cartModel.find({ email: email });
    return res.status(200).send(data);
    
  } catch (er) {
    return res.status(404).send(er.message);
  }
});
module.exports = app;
