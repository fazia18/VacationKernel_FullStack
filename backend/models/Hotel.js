const mongoose=require("mongoose");

const HotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    photos:{
        type:[String],
    },
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
        require:true
    },
    CheapestPrice:{
        type:Number,
        require:true
    },
    featured:{
        type:Boolean,
        default:false
    },
});


module.exports=mongoose.model("Hotel",HotelSchema)
