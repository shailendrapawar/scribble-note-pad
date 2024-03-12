// const env=require('env');


const mongoose =require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/todo');

const dataSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }


})

const dataModel=mongoose.model("users",dataSchema);

module.exports=dataModel;