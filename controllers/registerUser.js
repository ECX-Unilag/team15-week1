const { Response, ResponseError } = require("../utils/response");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async(request) => {
  let { fullname, email, password } = request.body;
  password = bcrypt.hashSync(request.body.password, 12);

  //check if user exist with same email
  let existUser = await User.findOne({ email: request.body.email });
  if (!existUser) {
    // create new vendor
    let newUser = new User({
      fullname: fullname,
      email: email,
      password: password,
    });

    let data = await newUser.save();
    data = data.toJSON();
    delete data.password;

    //create a token for the registered user
    const payload = {
      fullname:data.fullname,
      email:data.email
    }

    const registeredToken = jwt.sign(payload,process.env.SECRETKEY)

    return new Response(200, {
      status: "Successful",
      responseMessage: data,
      userToken:registeredToken
      
    });
  } else {
    throw new ResponseError(500, "User email already used");
  }
};
