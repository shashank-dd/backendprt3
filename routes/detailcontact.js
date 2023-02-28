const express=require("express")
const route=express.Router();
const cors = require("cors");

route.use(cors({ 
    origin: "*",
}))

const contact=require("../models/contact")

// route.use(express.json())

const bodyParser = require("body-parser");
route.use(express.json())
route.use(bodyParser.urlencoded())
route.use(bodyParser.json())
route.post("/v1/contacts",async(req,res)=>{
    try {
        console.log("coming")
console.log(req.body)
       
   
        const dat=await contact.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
             email:req.body.email,
             phone:req.body.phone
         
             }) 
          

        res.status(201).json({
            data:dat

        })
    } catch (e) {
        res.status(404).json({
            err:e.message
        })
    }
   
})
route.get("/v1/contacts",async(req,res)=>{
    try {
        console.log("coming to get")

        console.log("rout comming")
   
        const dat=await contact.find() 
        res.status(200).json({
            data:dat

        })
    } catch (e) {
        res.status(404).json({
            err:e.message
        })
    }
   
})

route.get("/v1/contacts/:id",async(req,res)=>{
    try {
      console.log(req.params)
   
        const dat=await contact.findOne({_id:req.params.id}) 
        res.status(200).json({
            data:dat

        })
    } catch (e) {
        res.status(404).json({
            err:"There is no contact with that id"
        })
    }
   
})

route.delete("/v1/contacts/:id",async(req,res)=>{
    try {
      console.log(req.params)
   
        const dat=await contact.deleteOne({_id:req.params.id}) 
        console.log(dat)
        res.status(204).json({
            data:dat

        })
    } catch (e) {
        console.log(000000)
        res.status(204).json({
            err:"There is no contact with that id"
        })
    }
   
})

route.patch("/v1/contacts/:id",async(req,res)=>{
    try {
      console.log(req.params,req.body)
   
        const dat=await contact.update({_id:req.params.id},{$set:{firstName:req.body.firstName}}) 
        console.log(dat)
        res.status(204).json({
            data:dat

        })
    } catch (e) {
        
        res.status(404).json({
            err:"There is no contact with that id"
        })
    }
   
})












 module.exports= route;