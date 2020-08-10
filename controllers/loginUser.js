const { Response, ResponseError } = require("../utils/response");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("../models/user");

exports.loginUser = async (request) => {
  //check if user email exist
  let userLogin = await User.findOne({email:request.body.email}, {delete:false})
  if(!userLogin)throw new ResponseError(400,'No such User this email ')
  if(!bcrypt.compareSync(request.body.password, userLogin.password)) throw new ResponseError(400, 'Password do not match')
  const payload ={
      id:userLogin.id,
      email:userLogin.email
  }

  let loginToken = jwt.sign(payload,process.env.SECRETKEY)
  return new Response(200,{
      status:'Login Successful',
      login_details:userLogin,
      login_token:loginToken 
  })
};
