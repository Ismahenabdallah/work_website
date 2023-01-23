const asynHandler = require('express-async-handler');
const Job = require('../models/entreprise.model')

const share =asynHandler (async(req,res)=>{
    try { 

        const {nom_jobs, nom_entreprise,categories ,  adresse}=req.body
       
       
        if (!nom_jobs || !nom_entreprise || !categories  || !adresse )
            return res.status(400).json({ msg: "Please fill in all fields." })
        const job = new Job({
            ...req.body, 
            postedBy:req.user
        })
        await job.save()

        res.status(200).json({ job, message: "success" });
    } catch (error) {
        res.status(500).json(error)
    }

}) 
module.exports={
    share
}