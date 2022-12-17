const express = require("express");
const productModel = require("./product.model");
const app = express.Router();
const jwt = require("jsonwebtoken");

app.post("/", async (req, res) => {
  //check if admin is adding to products [ROLE BASED ACEESS]
 // const token = req.headers["authorization"];
  let s = req.body.data.data.split(",");
  console.log(s)

  if (!s) {
    return res.status(403).send("Missing Entities");
  }
  try {
    let singleProduct = await productModel.create({
      productName: s[0],
      image: s[1],
      price: s[2],
      qty: 1
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

app.delete("/:id", async (req, res) => {
  console.log(req)
  try {
    let exists = await productModel.findOneAndDelete({
      _id: req.params.id,
    });

    console.log(exists, req.params.id);

    res.status(200).send("Product deleted successfully");
  } catch (e) {
    res.send(e.massage);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(403).send("MISSING ENTITES");
  }
  try {
    let singlData = await productModel.findOne({ _id: id });
    if (!singlData) {
      return res.status(403).send("data not found");
    }
    return res.status(200).send(singlData);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;
