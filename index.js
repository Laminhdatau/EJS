const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(8080, () => {
  console.log("Express berjalan di port http://localhost:8080");
});
