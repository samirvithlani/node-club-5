const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
    fieldName:{
        type: String,
    },
    fieldType:{
        type: String,
    },
    value:{
        type: String,
    },
    placeholder:{
        type: String,
    },
    name:{
        type: String,
    }
})
module.exports = mongoose.model('Forms', FormsSchema);