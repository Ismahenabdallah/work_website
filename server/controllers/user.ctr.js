const asynHandler = require('express-async-handler');
const User = require('../models/user.model')
/**
 *  try {
        await User.findOne({user: req.user._id})
        .then(async (profile)=>{
            
               await  User.findOneAndUpdate(
                    {_id: profile._id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
            
    })
     }
 */
const UpdateProfil= asynHandler(async(req,res)=>{
    try {
        await User.findOne({user: req.user._id})
        .then(async (profile)=>{
            
               await  User.findOneAndUpdate(
                    {_id: profile._id},
                     req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
            
    })
     } catch (error) {
        res.status(404).json(error.message)
     }   
})
 
const getProfil =  asynHandler(async(req,res)=>{
try {
    await User.findOne({user: req.user._id}).then(user=>res.json(user))    
} catch (error) {
    res.status(404).json(error.message)
}


})
module.exports={
    UpdateProfil, 
    getProfil

}