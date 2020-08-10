const router = require("express").Router();

router.use(require("./question"));
router.use(require("./computer"));
router.use(require("./auth"));

module.exports = router;
