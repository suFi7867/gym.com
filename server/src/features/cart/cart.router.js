const express = require("express");
const CartModel = require("./cart.model");
const cartModel = require("./cart.model");
const app = express.Router();

app.get("/", async (req, res) => {
  if (!req.body.email) {
    try {
      let data = await CartModel.find();
      res.status(200).send(data);
    } catch (e) {
      res.status(401).send(e.massage);
    }
  }
  try {
    let data = await CartModel.findOne({ email: req.body.email });
    res.status(201).send(data);
  } catch (e) {
    res.status(404).send(e.massage);
  }
});

app.post("/", async (req, res) => {
  //    if(req.body.negative){
  //     const { name , email  } = req.body
  //     let exists = await CartModel.updateOne({email:req.body.email},{$set:{}});
  //       if(exists)

  //    }

  try {
    let exists = await CartModel.findOne({ email: req.body.email });

    if (exists) {
      let flag = false;
      exists.cart?.map((item) => {
        if (item.productName === req.body.data.productName) {
          flag = true;
        }
        return;
      });
      if (flag) {
        return res.status(400).send("Product already in Cart");
      }

      let addData = await cartModel.updateOne(
        { email: req.body.email },
        { $push: { cart: req.body.data } }
      );

      return res.status(200).send(addData);
    } else {
      let newData = { email: req.body.email, cart: req.body.data };
      let data = await CartModel.create(newData);
      console.log(564);
      return res.status(200).send(data);
    }
  } catch (e) {
    res.send(e.massage);
  }
});

app.delete("/", async (req, res) => {
  try {
    let data = await cartModel.updateOne(
      { email: req.body.email },
      {
        $pull: { cart: { _id: req.body.data._id } },
      }
    );
    return res.status(200).send(data);
  } catch (e) {
    return res.status(404).send(e.massage);
  }
});

module.exports = app;
