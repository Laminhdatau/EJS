const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

//Agar bisa running dari mana saja
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(8080, () => {
  console.log("Express berjalan di port http://localhost:8080");
});
