const router = require("express").Router();
const injector = require('../services/injector_request')
const computerquestions = require("../controllers/computerScienceController");
router.post("/api/v1/easy-computer-science-question", injector(computerquestions.easyComputerQuestion));

module.exports = router;