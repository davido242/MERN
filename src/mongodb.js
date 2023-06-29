const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
})

// LogInSchema.pre('validate', function() {
//     console.log('this gets printed first');
//   });

LogInSchema.pre("validate", async function (next) {
    console.log("Fired before saving");
//   try {
//     console.log("Fired before saving");
//     // const salt = await bcrypt.genSalt(10);
//     // console.log(this.password, this.email);
//     next();
//   } catch (error) {
//     next(error);
//   }
});



const Collection = mongoose.model("Collection1", LogInSchema)

module.exports = Collection;
