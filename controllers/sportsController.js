const Sport = require("../models/sportSchema");
const { Response, ResponseError } = require("../utils/response");
require("dotenv").config();

exports.easySportQuestion = async (request) => {
  let { category, choice, level, setQuestion, answers } = request.body;

  let newEasyQuestion = new Sport({
    category: category,
    choice: choice,
    level: level,
    setQuestion: setQuestion,
    answers: answers,
  });
  let displayData = await newEasyQuestion.save();
  console.log(displayData);
  return new Response(200, {
    status: "Successful",
    question_one: displayData,
  });
};

exports.getAllsportQuestions = async (request) => {
  try {
    let results = await Sport.find({});
    return new Response(200, {
      status: "Successful",
      output: results,
    });
      
  } catch (error) {
      throw new ResponseError(400,'Unable to fetch data')
      
  }
  
};
