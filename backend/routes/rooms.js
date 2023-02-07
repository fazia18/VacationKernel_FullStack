const express=require("express");
const rooms=express.Router();

const {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
  }=require("../controllers/room.js");

const { verifyAdmin }=require("../utils/verifyToken.js");

rooms.post("/:hotelid", verifyAdmin, createRoom);

rooms.put("/availability/:id", updateRoomAvailability);

rooms.put("/:id", verifyAdmin, updateRoom);

rooms.delete("/:id/:hotelid", verifyAdmin, deleteRoom);


rooms.get("/:id", getRoom);


rooms.get("/", getRooms);


module.exports=rooms





