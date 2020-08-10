const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questions = new Schema({
category: String,
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

module.exports = mongoose.model('QUESTION' , questions)
