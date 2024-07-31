"use strict";
require('dotenv').config();

const express = require("express");
const path = require("path");

const multer = require("multer");
const cookieParser = require('cookie-parser');

const bodyParser = require("body-parser");
const app = express();

app.set("views", path.join(__dirname, "../Frontend/PUG"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/files/css', express.static('../Frontend/CSS'));
app.use('/files/img', express.static('../Frontend/IMG'));

app.get("/", require("./WebPage/Home.js"));









app.listen(process.env.Port,()=>{ console.log("Node JS Server is running on the Port 80\nLink: http://localhost/")})