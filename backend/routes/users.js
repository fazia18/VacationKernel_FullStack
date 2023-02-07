const express=require("express");
const users=express.Router();
const{updateUser,deleteUser,getUser,getUsers}=require("../controllers/user.js");
const {verifyToken, verifyUser, verifyAdmin}=require("../utils/verifyToken.js")


users.put("/:id", verifyUser, updateUser);
users.delete("/:id",verifyUser, deleteUser);
users.get("/:id",verifyUser, getUser);
users.get("/",verifyAdmin, getUsers);



module.exports=users