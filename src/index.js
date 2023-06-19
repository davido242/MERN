const express = require("express");

const app = express();
const path = require("path");
const hbs = require("hbs");

app.use(express.json());


app.get("/", (req, res) => {
    res.render("login");
    console.log(("hi Daveedo"));
})

app.listen(3000, () => {
    console.log("Port connected");
})