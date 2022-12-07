//mean --> e express --> middle ware express mongoose
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;
const TestRoutes = require('./routes/TestRoutes');
app.use('/test',TestRoutes) 


//db connection

mongoose.connect("mongodb://localhost:27017/club5",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected");
    }
})




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})