const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const mongoose=require("mongoose");
const auth=require("./routes/auth.js")
const users=require("./routes/users.js")
const hotels=require("./routes/hotels.js")
const rooms=require("./routes/rooms.js")
const cookieParser = require("cookie-parser")
const cors=require("cors");

mongoose.set('strictQuery', false);
const connect= async() => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo db")
} catch (error) {
    throw error
}
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/rooms", rooms);
app.use("/api/hotels", hotels);

app.listen(8800,()=>{
    connect()
    console.log("connected to backend")
})