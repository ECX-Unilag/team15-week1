const Questions = require("../models/questionSchema");
const { Response, ResponseError } = require("../utils/response");
require("dotenv").config();

exports.setQuestion = async (request) => {
  let { category,choice,level,setQuestion, answers } = request.body;
  let data = new Questions({
    category:category,
    choice:choice,
    level:level,
    setQuestion: setQuestion,
    answers: answers,
  });

  let displayAnswer = await data.save();
  let secondQuestion = await data.save()
  return new Response(200, {
    status: "Successful",
    results: displayAnswer, secondQuestion
  });

  
};
