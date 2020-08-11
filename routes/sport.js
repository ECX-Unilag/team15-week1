const router = require("express").Router();
const injector = require('../services/injector_request')
const sport = require("../controllers/sportsController");
router.post("/api/v1/sport",injector(sport.easySportQuestion) );

module.exports = router;
