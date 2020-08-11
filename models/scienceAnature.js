const mongoose = require('mongoose')
const Schema = mongoose.Schema

let nature = new Schema({
    ategory: String,
choice: String,
level: String,
setQuestion:String,
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

})

module.exports = mongoose.model('NATURE' , nature)