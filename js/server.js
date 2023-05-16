const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.post("/", (req, res) => {
  
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("result : " + result);
});

app.listen(3000, () => {
  console.log(`listening on port ${port}`);
});
