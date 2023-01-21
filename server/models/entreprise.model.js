const mongoose = require("mongoose");
const {ObjectId} =mongoose.Schema.Types;
const entrepriseSchema = new mongoose.Schema({
    non_jobs:String,
    non_entreprise:String,
    description:String,
    categories:Stirng ,
    data_share:{
      type:Date,
      default:Date.now
    },
    telephone:String,
    site_web:String,
    email: String, 
    annees_de_creaction:Date,
    // default: Date.now,
    nbr_employees:Number,
    revenue_annuel:Number,
    adresse:String,
    code_postal:Number,
    facebookLink:String,
    linkdInLink:String,
    instagramLink:String,
    applyinthisjobs:[{type:ObjectId,ref:"users"}],
    //followers : المتابعين لهذا العمل 

    

    
   
   
    
   
    
   
  
    
  },
  { timestamps: true }
  
  );
module.exports=mongoose.model('entreprises',entrepriseSchema)