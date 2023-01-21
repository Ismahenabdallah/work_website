const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user.model')
const asynHandler = require('express-async-handler');

const verifyTokenMethodeTwo = async(req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "please active your account" });
    }const decoded= jwt.verify(token,process.env.PRIVATE_KEY )
    const user = await User.findById(decoded._id)
    req.user=user;
    next();
  } catch (error) {}
};


const verifyToken = asynHandler(async(req,res,next)=>{

let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
{
  try {
    token=req.headers.authorization.split(' ')[1]
    const decoded= jwt.verify(token,process.env.PRIVATE_KEY )
    const user = await User.findById(decoded._id)
    req.user=user;
    console.log(req.user)

    next()
  } catch (error) {
    res.status(401);
    throw new Error('Not authorised , invalid token  , Active Your account ');
  }
}




}) 
  
module.exports = {verifyToken}


       
        
        
  