const router = require("express").Router();
const injector = require('../services/injector_request')
const nature = require("../controllers/natureController");
router.post("/api/v1/nature",injector(nature.easyScienceQuestion) );

module.exports = router;
