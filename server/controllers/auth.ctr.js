const validator = require("validator");
const asynHandler = require('express-async-handler');
const User = require("../models/user.model.js");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary').v2;
require('dotenv').config()
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
cloudinary.config({
    cloud_name: "dryq7pswe",
    api_key: "946912488497116",
    api_secret: "o0GM1XY0M973vN4sVkdQ8a9zSCE"
  });
const Register = asynHandler(async (req, res) => {
    try {
        const { email, mot_de_passe, confirm , nom, prenom} = req.body
        if (!email || !mot_de_passe || !confirm ,  !nom, !prenom  )
            return res.status(400).json({ msg: "Please fill in all fields." })
        if (!validateEmail(email))
            return res.status(400).json({ msg: "Invalid emails." })
        if (!validator.equals(mot_de_passe, confirm))
            return res.status(400).json({ msg: "Passwords not matches." })
        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ msg: "email already exist. " })
        //const file=req.files.image;
////const upload = cloudinary.uploader.upload(file.tempFilePath)

            const passwordHash = bcrypt.hashSync(mot_de_passe, 12)
        const newUser = new User({
            ...req.body
            , mot_de_passe: passwordHash, confirm: passwordHash
        })
        //jwt.sign(email, process.env.PRIVATE_KEY, { expiresIn: '15m' })

        await newUser.save()

        res.status(200).json({ newUser, message: "success" });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})
const Login = asynHandler(async (req, res) => {
    try {
        const { email, mot_de_passe, } = req.body
        if (!email || !mot_de_passe)
            return res.status(422).json({ msg: "please add email or password" })

        const user = await User.findOne({email: email})
        if (!user)
            return res.status(400).json({ msg: "This email does not exist." })
         
        
           if (user.status !== "Active")
                return res.status(400).json({ msg: "Please Active your Account in Your Email" })
           ///await is important 
              const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe)
      
                if (!isMatch){
                    return res.status(400).json({ msg: "Password is incorrect." })
        
                }else{
                    var token = jwt.sign({ 
                        _id: user._id,
                       
                        email: user.email,
                        nom:user.nom,
                        prenom:user.prenom,
                        photo:user.photo,
                        telephone:user.telephone,
                        objectif:user.objectif,
                        cv:user.cv,
                        adresse:user.adresse,
                        numbre_apply:user.numbre_apply
                        
                       
                       }, process.env.PRIVATE_KEY,  { expiresIn: '1h' });
                       res.status(200).json({
                         message: "success",
                         token: "Bearer "+token,
                        
                         
                       })
                }
             
           
       
       
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

module.exports = {
    Register,
    Login
}