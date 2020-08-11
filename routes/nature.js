const router = require("express").Router();
const injector = require('../services/injector_request')
const nature = require("../controllers/natureController");
const getnature = require("../controllers/natureController");
router.post("/api/v1/nature",injector(nature.easyScienceQuestion) );
router.get("/api/v1/getnature",injector(getnature.getAllScienceQuestion) );

module.exports = router;
