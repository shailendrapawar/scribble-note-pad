const express=require('express');
const app=express();
const mongooose=require('mongoose');



const dataModel=require('../config')


const userRouter=express.Router();



//api for getting all data---------
userRouter.get('/all',async(req,res)=>{
    const result= await dataModel.find({})
res.status(200).json(result)
})


//api for getting single data---------------
userRouter.get('/single/:id',async(req,res)=>{
    try{
        const {id}=req.params
    const result= await dataModel.find({_id:id})
    res.status(200).json(result)
    }catch(err){
        console.log(err)
        res.send({err:err.message})
    }

})


//api for adding datacard
userRouter.post("/send",async(req,res)=>{
   try{
    const {title,content}=req.body;
    const result= await dataModel.create({
        title:title,
        content:content
    })

    res.status(201).json(result);
   }catch(err){
        console.log(err)
        res.send({err:err.message})
    }
})

//api for delete data card---------------
userRouter.delete("/remove/:id",async(req,res)=>{
    try{
        const {id}=req.params;
    const result=await dataModel.deleteOne({});
    res.status(201).json(result);
    }catch(err){
        console.log(err)
        res.send({err:err.message})
    }
})

//api for updating card------------------
userRouter.put("/update/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const{title,content}=req.body;
        const result=await dataModel.updateOne({
            id,$set:{
                title:title,
                content:content
            }
        
        });
        res.status(201).json(result);
    }catch(err){
        console.log(err)
        res.send({err:err.message})
    }
})


//api for deleting all datacard------------------
userRouter.delete("/danger",async(req,res)=>{
    try{
        const result=await dataModel.deleteMany({});
        res.status(201).json(result);

    }catch(err){
        console.log(err)
        res.send({err:err.message})
    }
})
userRouter.get('/search/:key',async(req,res)=>{
    try{
        const result= await dataModel.find({

            "$or":[
                {title:{$regex:req.params.key}},
                {content:{$regex:req.params.key}}
            ]
        })

        res.status(201).json(result);

    }catch(err){
        console.log(err)
        res.send({err:err.message})
    }
})

module.exports=userRouter;