const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef recipe hunter is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
