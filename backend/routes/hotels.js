const express=require("express");
const { createHotel, updateHotel,deleteHotel,getHotel, getHotels, countByCity,countByType, getHotelRooms} = require("../controllers/hotel.js");
const hotels=express.Router();
const Hotel=require("../models/Hotel.js")
const {verifyAdmin}=require("../utils/verifyToken.js")


hotels.post("/",verifyAdmin, createHotel);
hotels.put("/:id",verifyAdmin, updateHotel);
hotels.delete("/:id",verifyAdmin, deleteHotel);
hotels.get("/find/:id", getHotel);
hotels.get("/", getHotels);

hotels.get("/", getHotels);
hotels.get("/countByCity", countByCity);
hotels.get("/countByType", countByType);
hotels.get("/room/:id", getHotelRooms);


module.exports=hotels