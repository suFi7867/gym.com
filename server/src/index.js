require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");



app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
  res.status(200).send("BASE PAGE");
});
app.listen(8080, async () => {
  await connect();
  console.log("listen on 8080");
});
