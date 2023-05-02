const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

const chefsData = require("./data/chefs.json");
const recipes = require("./data/recipesDetails.json");

app.get("/", (req, res) => {
  res.send("Chef recipe hunter is running");
});

app.get("/chefsData", (req, res) => {
  res.send(chefsData);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipesDetails = recipes.filter((r) => r.chef_id === id);
  res.send(recipesDetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
