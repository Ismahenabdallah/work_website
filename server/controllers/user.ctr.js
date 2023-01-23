const asynHandler = require('express-async-handler');
const User = require('../models/user.model')
const AddProfile = async (req ,res)=>{
    const {errors, isValid} = ValidateProfile(req.body)
    try {
        if(!isValid){
          res.status(404).json(errors)
        }else{
            ProfileModel.findOne({user: req.user.id})
        .then(async (profile)=>{
            if(!profile){
                req.body.user = req.user.id
                await ProfileModel.create(req.body)
                res.status(200).json({message: "success"})
            }else{
               await  ProfileModel.findOneAndUpdate(
                    {_id: profile._id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
            }
        })
        }
    } catch (error) {
         res.status(404).json(error.message)
    }
}
const getAllUsers = asynHandler( async (req, res) => {
    try {
      let users = await User.find();
    //   if(users.role!="admin")
          return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  })
const UpdateProfil= asynHandler(async(req,res)=>{
    try {
        await User.findOne({_id: req.user._id})
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
    const data =  await User.findOne({_id: req.user._id})
    res.status(200).json(data)

 } catch (error) {
     res.status(404).json(error.message)
 }})

const getByiD= asynHandler(async(req,res)=>{
    try {
      const user=await User.findOne({_id: req.params.id})
        res.status(200).json({user, message: "succces"})
        //if(!user) return res.status(404).json({message: "user not found"})
    } catch (error) {
      res.status(404).json({message: "user not found"})
      res.status(404).json(error)
    }
  })
module.exports={
    UpdateProfil, 
    getProfil,
    getAllUsers

}