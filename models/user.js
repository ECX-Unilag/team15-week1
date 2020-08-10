const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  fullname: String,
  email: String,
  password:{
    type:String,
    delete:false
  } 
});

module.exports = mongoose.model("User", userSchema);
