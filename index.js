const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect =()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/kiran")
};


//USER Schema and MODEL
const userSchema = new mongoose.Schema(
    {
        first_name : {type: String, required:true},
        last_name : {type:String,required:false},
        email: {type:String,required:true},
        gender:{type: String, required:false,default:"Male"},
    },
    {
        versionKey: false,
        timeseries: true,
    }
);

const User = mongoose.model("user",userSchema);










app.listen(1234,()=>{
    console.log("Server Listening on 1234")
});