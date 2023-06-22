const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(() => {
    console.log("MongoDb connected");
})
.catch(() => {
    console.log("Failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection