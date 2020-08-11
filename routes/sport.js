const router = require("express").Router();
const injector = require('../services/injector_request')
const sport = require("../controllers/sportsController");
const getSport = require('../controllers/sportsController')
router.post("/api/v1/sport",injector(sport.easySportQuestion) );
router.get("/api/v1/getsport",injector(getSport.getAllsportQuestions) );

module.exports = router;
