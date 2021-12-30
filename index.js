const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect =()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/kiran")
};

app.listen(1234,()=>{
    console.log("Server Listening on 1234")
});