const mongoose = require("mongoose");
const {ObjectId} =mongoose.Schema.Types;
const entrepriseSchema = new mongoose.Schema({
    
    nom_entreprise:String, 
    description:String, 
    categories:{  
      type: String, 
      enum: ['Jeux vidéo', 'Systèmes embarqués','Cybersécurité',
             'Mobile','Data science','DevOps','Front-end','Back-end',
             'Full-stack'
    ],
    },
    data_share:{ 
      type:Date, 
      default:Date.now
    },
    telephone:Number,
    specialite:String,
   
   
    adresse:String,
    facebookLink:String,
    linkdInLink:String,
    instagramLink:String,
    postedBy:{type:ObjectId,ref:"users"},
    applyinthisjobs:[{type:ObjectId,ref:"users"}],
    
    
    
    

    

    
   
   
    
   
    
   
  
    
  },
  { timestamps: true }
  
  );
module.exports=mongoose.model('entreprises',entrepriseSchema)