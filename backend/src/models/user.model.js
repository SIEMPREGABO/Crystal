import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true, 
        trim:true},
    paternlastname: {
        type:String,
        required: true, 
        trim:true},
    maternlastname:{
        type:String,
        required: true, 
        trim:true},
    number:{
        type:String,
        required: true,
        trim:true},
    email:{
        type:String,
        unique:true,
        required: true, 
        trim:true},
    password:{
        type:String,
        required: true},
    image:{
        name:{
            type: String
        },
        type: {
            type: String
        },
        data: {
            type: String
        },
        size: {
            type:String
        }
    }
},{
    timestamps: true
});

export default mongoose.model("User", userSchema);