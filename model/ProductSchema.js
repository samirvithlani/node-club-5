const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    colors:[
        {
            type:String
        }
    ],
    size:{
        type:String,
        enum:["s","m","l","xl","xxl","xxxl"]
    },
    isAvailable:{
        type:Boolean,
        default:true,
    },
    unit:{
        type:Number,
        default:0
    }
    },
    { timestamps: true }
)
module.exports = mongoose.model('Product', productSchema);