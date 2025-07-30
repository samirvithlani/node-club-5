//mean --> e express --> middle ware express mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: '*'
  }));
require('dotenv').config()

const limiter = rateLimit({
  windowMs: 10*1000, // 15 minutes
  max: 1, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply to all requests
app.use(limiter);

const PORT = process.env.PORT || 3001;
const TestRoutes = require('./routes/TestRoutes');
const userRoutes = require('./routes/UserRoutes');
const departmentRoutes = require('./routes/DepartmentRoutes');
const employeeRoutes = require('./routes/EmployeeRoutes');
const productRoutes = require('./routes/ProductRoutes');
const cartRoutes = require('./routes/CartRoutes');
const uploadRoutes = require('./routes/UploadRoutes');
//const roleRoutes = require('./routes/RoleRoutes');
//const readDataFromFile = require('./routes/StoreDataRoutes');
//const formRoutes = require('./routes/FormRoutes');
//const locationRoutes = require('./routes/LocationRoutes');
//const questionRoutes = require('./routes/QuestionRoutes');


app.use(express.static(path.join(__dirname, 'public')))

app.post('/loadstatic', (req, res) => {
    // Here you can specify the logic to determine the file to be served
    const staticFilePath = path.join(__dirname, 'public', 'static.html');
    console.log("request...",req.body);
    
    //res.send("<h1>'payment suces...'</h1>")
    res.sendFile(staticFilePath, (err) => {
        if (err) {
          res.status(500).send('Error loading the static page');
        }
      });
  });


app.use('/test',TestRoutes) 
app.use('/user',userRoutes)
app.use('/department',departmentRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
//app.use('/cart',cartRoutes)
//app.use('/upload',uploadRoutes)
//app.use('/role',roleRoutes)
//app.use('/rf',readDataFromFile)
//app.use('/form',formRoutes)
//app.use('/hiRinku',locationRoutes)
//app.use('/question',questionRoutes)

//db connection

mongoose.connect("mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/club5?retryWrites=true&w=majority",{
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