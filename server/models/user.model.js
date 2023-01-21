const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  photo: String,
  telephone: String,
  objectif: String,

  email: String,
  mot_de_passe: String,
  confirm: String,
  cv: String,
  numbre_apply: [{ type: ObjectId, ref: "entreprises" }],
  //تعطيني فاش شاركت 



  status: {
    type: String,
    enum: ['Desactive', 'Active'],
    default: 'Active'
  },




},
  { timestamps: true }

);
module.exports = mongoose.model('users', userSchema)