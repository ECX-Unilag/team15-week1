const Computer = require('../models/computerS')
const{Response,ResponseError} = require('../utils/response')
require('dotenv').config()

exports.easyComputerQuestion = async(request)=>{
    let {category,choice,level,question,correct_answer,incorrect_answers} = request.body

    let newEasyQuestion = new Computer({
        category:category,
        choice:choice,
        level:level,
        question:question,
        correct_answer:correct_answer,
        incorrect_answers:incorrect_answers
    })
    let displayData = await newEasyQuestion.save()
    console.log(displayData)
    return new Response(200,{
        status:'Successful',
        question_one:displayData
    })
}






