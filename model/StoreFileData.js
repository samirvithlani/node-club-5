const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fileStore = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    id:{
        type:String,
    }
    

})
module.exports = mongoose.model('FileStore', fileStore);