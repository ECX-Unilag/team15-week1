const { body, validationResult } = require("express-validator");

const userValidateInputs = () => [
  body("fullname")
    .isString()
    .not()
    .isEmpty()
    .withMessage("Fullname cannot be empty"),
  body("email").isEmail().withMessage("Provide valid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 chars long"),
  body("password").notEmpty().withMessage("password field cannot be empty"),
  //body("phone").isMobilePhone().withMessage("must  be a valid phone number"),
];

const validate = (request, response, next) => {
  const errors = validationResult(request);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return response.status(422).json({
    status: 422,
    errors: extractedErrors,
  });
};

module.exports = {
  userValidateInputs,
  validate,
};
