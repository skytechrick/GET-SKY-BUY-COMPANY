require('dotenv').config();

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const {User} = require("./Mongoose.js")

app.get("/", (req , res) =>{
    res.status(200).send("Server started at 80");
})

app.listen(process.env.Port,()=>{ console.log("Node JS Server is running on the Port 80\nLink: http://192.168.0.12/")})