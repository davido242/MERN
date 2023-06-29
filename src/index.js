const express = require("express");

const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb")

const templatePath = path.join(__dirname, "../templates")

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home");
    console.log("file: index.js:18 ~ app.get ~ landing page loaded");
})
app.get("/login", (req, res) => {
    res.render("login");
    console.log(("Login Page Loaded"));
})
app.get("/signup", (req, res) => {
    res.render("signup");
    console.log(("Signup Page Loaded"));
})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])
    res.render("home");
    console.log(("Dashboard Page Loaded"));
})

app.post("/login", async (req, res) => {
    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password == req.body.password) {
            res.render("dashboard");
        }else {
            res.send("Wrong Password")
        }
    }catch(err){
        console.log("🚀 ~ file: index.js:52 ~ app.post ~ err:", err)
        res.send("Wrong Details")
    }
})

app.listen(3000, () => {
    console.log("Port connected, listening on port 3000");
})