const mongoose = require("mongoose");
const {ObjectId} =mongoose.Schema.Types;
const entrepriseSchema = new mongoose.Schema({
    nom_jobs:String,
    nom_entreprise:String,
    description:String,
    categories:String,
    data_share:{ 
      type:Date,
      default:Date.now
    },
    telephone:Number,
    site_web:String,
   
    adresse:String,
    facebookLink:String,
    linkdInLink:String,
    instagramLink:String,
    postedBy:{type:ObjectId,ref:"users"},
    applyinthisjobs:[{type:ObjectId,ref:"users"}],
    
    
   
    //followers : المتابعين لهذا العمل 

    

    
   
   
    
   
    
   
  
    
  },
  { timestamps: true }
  
  );
module.exports=mongoose.model('entreprises',entrepriseSchema)