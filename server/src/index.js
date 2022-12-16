require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const productRouter = require("./features/products/product.router");
const cartRouter = require("./features/cart/cart.router");
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.get("/", async (req, res) => {
  res.status(200).send("BASE PAGE");
});
app.listen(PORT, async () => {
  await connect();
  console.log("listen on 8080");
});
