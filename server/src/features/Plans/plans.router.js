const express = require("express");
const planModel = require("./plans.model");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let data = await planModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;
