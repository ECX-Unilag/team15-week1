const router = require("express").Router();

router.use(require("./question"));
router.use(require("./computer"));
router.use(require("./auth"));
router.use(require("./sport"));
router.use(require("./nature"));
module.exports = router;
