const router = require("express").Router();
const injector = require('../services/injector_request')
const questions = require("../controllers/entertainmentController");
router.post("/api/v1/question",injector(questions.setQuestion) );

module.exports = router;
