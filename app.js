const express = require("express");
require("../src/db/conn.js");
const MensRanking = require("../src/models/mens.js");
const app = express();
const port = process.env.PORT || 3000;
const router = require("../src/routers/men");
app.use(express.json());

app.use(router);
app.listen(port, () => {
  console.log(`Connection is live at port no, ${port}`);
});
