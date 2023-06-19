const express = require("express");

const app = express();
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "../templates")

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);



app.get("/", (req, res) => {
    res.render("login");
    console.log(("My Login Page Loaded"));
})
app.get("/signup", (req, res) => {
    res.render("signup");
    console.log(("My Signup Page Loaded"));
})

app.listen(3000, () => {
    console.log("Port connected");
})