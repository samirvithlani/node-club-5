//mean --> e express --> middle ware express mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
require('dotenv').config()


const PORT = process.env.PORT || 3000;
const TestRoutes = require('./routes/TestRoutes');
const userRoutes = require('./routes/UserRoutes');
const departmentRoutes = require('./routes/DepartmentRoutes');
const employeeRoutes = require('./routes/EmployeeRoutes');
const productRoutes = require('./routes/ProductRoutes');
const cartRoutes = require('./routes/CartRoutes');
const uploadRoutes = require('./routes/UploadRoutes');
const roleRoutes = require('./routes/RoleRoutes');

app.use('/test',TestRoutes) 
app.use('/user',userRoutes)
app.use('/department',departmentRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)
app.use('/role',roleRoutes)

//db connection

mongoose.connect("mongodb+srv://samir:sam123@cluster0.key63fx.mongodb.net/club5?retryWrites=true&w=majority",{
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