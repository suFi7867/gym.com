const express = require("express");
const CartModel = require("./cart.model");
const cartModel = require("./cart.model");
const app = express.Router();

app.get("/", async (req, res) => {
  if (!req.body.email) {
    try {
      let data = await CartModel.find();
     return res.status(200).send(data);
    } catch (e) {
     return res.status(401).send(e.massage);
    }
  }

  try {
    
    let data = await CartModel.findOne({ email: req.body.email });

    if(!data){
     return res.status(403).send("no cart data");
    }

   return res.status(201).send(data);

    

  } catch (e) {
    res.status(404).send(e.massage);
  }
});

app.get("/:email", async (req, res) => {

  console.log(req.params.email)

  if(req.params.email ){
    let data = await cartModel.findOne({email:req.params.email});
   
    if(!data){
      return res.status(403).send("no cart data");
     }

    return res.status(200).send(data);
  }

  return res.send(404)
});

app.post("/", async (req, res) => {

  try {
    let exists = await CartModel.findOne({ email: req.body.email });

    if (exists) {
      let flag = false;
      exists.cart?.map((item) => {
        if (item.productName === req.body.data.productName) {
          flag = true;
          if (flag) {
            return res.status(201).send("Product already in Cart");
          }
        }
        
      });
      if (flag) {
        return res.status(201).send("Product already in Cart");
      }

      let addData = await cartModel.updateOne(
        { email: req.body.email },
        { $push: { cart: req.body.data } }
      );

      return res.status(200).send(addData);
    } else {

      let newData = { email: req.body.email, cart: req.body.data };
      let data = await CartModel.create(newData);
    //  console.log(564);
      return res.status(200).send(data);
    }
  } catch (e) {
    res.send(e.massage);
  }
});

app.patch("/", async (req, res) => {

 // console.log(req)
 // console.log(req.body)
  //console.log(req.body, req.body.data, "SDS")
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


///wishlist


app.post("/wishlist", async (req, res) => {

  console.log(req)

  try {
    let exists = await CartModel.findOne({ email: req.body.email });

    if (exists) {
      let flag = false;
      exists.wishlist?.map((item) => {
        if (item.productName === req.body.data.productName) {
          flag = true;
          if (flag) {
            return res.status(201).send("Product already in Cart");
          }
        }
        
      });
      if (flag) {
        return res.status(201).send("Product already in Cart");
      }

      let addData = await cartModel.updateOne(
        { email: req.body.email },
        { $push: { wishlist: req.body.data } }
      );

      return res.status(200).send(addData);
    } else {

      let newData = { email: req.body.email, wishlist: req.body.data };
      let data = await CartModel.create(newData);
    //  console.log(564);
      return res.status(200).send(data);
    }
  } catch (e) {
    res.send(e.massage);
  }
});


// wishlist to cart 
app.patch("/move", async (req, res) => {
  
  const { email , id } = req.body
 // console.log(req)
   try {

    let user = await cartModel.findOne({email: email})
  
    let product = user.wishlist.find((el)=> el._id == id)
    console.log(product)
     await cartModel.findOneAndUpdate(
       {email:email},
       {$pull: {wishlist: {_id:id}}, $push: {cart: product  }  },
       {new :true}
       )

     return res.status(200).send("SUCCESS");
   } catch (e) {
     return res.status(404).send(e.massage);
   }
 });



app.patch("/purchase", async (req, res) => {
  
  const { email } = req.body
  console.log(email)
   try {

    let user = await cartModel.findOne({email: email})
   console.log(user.cart)
 
     await cartModel.findOneAndUpdate(
       {email:email},
       {$set: {purchase: [...user.purchase,...user.cart]} , cart: [] },
       {new :true}
       )

     return res.status(200).send("SUCCESS");
   } catch (e) {
     return res.status(404).send(e.massage);
   }
 });

module.exports = app;



//{
//  "_id": "639dabab40f0151c0c0ebb38",
//  "productName": "Winner Whey",
//  "image": "https://i.ibb.co/94BnTpt/product-2.png",
//  "price": "16.74",
//  "qty": 1
//},


