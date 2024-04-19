import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{type:String , trim:true , required:true},
    email: { 
        type:String , trim:true , required:true, unique:true,
    },
    password:{type:String , trim:true , required:true},
    join:{type: Date,default:Date.now},
    gender:{type:String, required:true},
    age:{type:Number,validate :(v)=>{$and[v>=5,v<=130]}}
})

const userModel=mongoose.model('user',userSchema)

export default userModel;