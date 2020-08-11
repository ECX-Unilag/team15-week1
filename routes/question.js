const router = require("express").Router();
const injector = require('../services/injector_request')
const questions = require("../controllers/entertainmentController");
const getquestions = require("../controllers/entertainmentController");
router.post("/api/v1/question",injector(questions.setQuestion) );
router.get("/api/v1/getquestion",injector(getquestions.getAllQuestions) );

module.exports = router;
