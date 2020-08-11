const Computer = require('../models/computerS')
const{Response,ResponseError} = require('../utils/response')
require('dotenv').config()

exports.easyComputerQuestion = async(request)=>{
    let {category,choice,level,setQuestion, answers} = request.body

    let newEasyQuestion = new Computer({
        category:category,
        choice:choice,
        level:level,
        setQuestion: setQuestion,
        answers: answers,
    })
    let displayData = await newEasyQuestion.save()
    console.log(displayData)
    return new Response(200,{
        status:'Successful',
        question_one:displayData
    })
}






