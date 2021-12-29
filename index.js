const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(1234,()=>{
    console.log("Server Listening on 1234")
});