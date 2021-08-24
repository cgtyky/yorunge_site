const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/projeler", (req, res) => {
  res.render("projeler");
});

app.get("/hakkimizda", (req, res) => {
  res.render("hakkimizda");
});

app.get("/iletisim", (req, res) => {
  res.render("iletisim");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
