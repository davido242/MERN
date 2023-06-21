const mongoose = require("mongoose");

moongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(() => {
    console.log("MongoDb connected");
})
.catch(() => {
    console.log("Failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: ture
    }
})

const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection