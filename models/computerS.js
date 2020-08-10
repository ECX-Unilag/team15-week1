const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let computerSchema = new Schema({
  category: String,
  choice: String,
  level: String,
  answers: [
    {
    option:{
        type:String,
        required:true
    },
    isCorrect:{
        type:Boolean,
        required:true,
        default:false
    
    }
}]
});

module.exports = mongoose.model("COMPUTER", computerSchema);
