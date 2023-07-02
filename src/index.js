const express = require("express");
const bcrypt = require("bcrypt");

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
    const { name, password } = req.body;
    const hasher = await bcrypt.hash(password, 10)

    await collection.insertMany({
        name,
        password: hasher
    })
    res.send("Registration was successful");
})

app.post("/login", async (req, res) => {
    try {
        const { password } = req.body
        const user = await collection.findOne({name:req.body.name})
        if(!user){
            res.send("No user with such username")
            console.log("Wrong Username")
        }
        const isvalid = await bcrypt.compare(password, user.password)
        if(!isvalid) {
            res.send("Wrong Password Mehnn!")            
        } else{
            res.render("dashboard", {title: user.name});
        }        
    } catch (error) {
        res.send("Dammnn Hommie");
        console.log("🚀 ~ file: index.js:47 ~ app.post ~ error:", error)
    }
})

app.listen(3000, () => {
    console.log("Port connected, listening on port 3000");
})