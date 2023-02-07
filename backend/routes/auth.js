const express=require("express");
const auth=express.Router();
const { login, register } =require("../controllers/auth.js");


auth.post("/register", register)
auth.post("/login", login)


module.exports=auth


