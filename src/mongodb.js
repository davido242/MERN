const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/LoginSignUpTutorial")
  .then(() => {
    console.log("MongoDb connected successfully");
  })
  .catch((err) => {
    console.log("🚀 ~ file: mongodb.js:8 ~ err:", err);
  });

const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})


const Collection = mongoose.model("Collection1", LogInSchema)

module.exports = Collection;