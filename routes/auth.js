const injector = require("../services/injector_request");
const router = require("express").Router();
const register = require("../controllers/registerUser");
const login = require("../controllers/loginUser");
const { userValidateInputs, validate } = require("../helper/validateInput");

router.post(
  "/api/v1/register",
  userValidateInputs(),
  validate,
  injector(register.register)
);
router.post(
  "/api/v1/login",
 
  injector(login.loginUser)
);
module.exports = router;
