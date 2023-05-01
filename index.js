const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

const chefsData = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Chef recipe hunter is running");
});

app.get("/chefsData", (req, res) => {
  res.send(chefsData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
