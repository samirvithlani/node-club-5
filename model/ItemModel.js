const mongoose = require("mongoose")
const { boolean } = require("zod")
const Schema = mongoose.Schema

const ItemModel = new Schema({

    name:{
        type:String
    },
    price:{
        type:Number
    },
    color:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    stock:{
        type:Number
    },
    
})
module.exports = mongoose.model("items",ItemModel)