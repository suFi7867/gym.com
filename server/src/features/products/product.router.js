const express = require("express");
const productModel = require("./product.model");
const app = express.Router();

app.post("/", async (req, res) => {
    //check if admin is adding to products [ROLE BASED ACEESS]
  const { productName, price, image } = req.body;
  if (!productName || !price || !image) {
    return res.status(403).send("Missing Entities");
  }
  try {
    let singleProduct = await productModel.create({
      productName,
      price,
      image,
    });

    return res.status(200).send({ message: "ADDED", singleProduct });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.get("/", async (req, res) => {
  try {
    let data = await productModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(403).send("MISSING ENTITES");
  }
  try {
    let singlData = await productModel.findOne({ _id: id });
    return res.status(200).send(singlData);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;
