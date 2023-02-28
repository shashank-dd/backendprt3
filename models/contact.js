const mongoose = require('mongoose');
const dataschema = new mongoose.Schema({
    firstName:{type:String,required:true}, 
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:true,unique:true}
  
     })
  

const contact = mongoose.model('contact', dataschema);
module.exports = contact;



