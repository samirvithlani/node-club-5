const multer = require('multer');
//storage --> destination and filename

const storage = multer.diskStorage({
    destination:'./uploads/',
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

//disk capacity
const upload = multer({

    storage:storage,
    limits:{fileSize:900000000},
    //fileFilter:fileFilter
}).single('file');


exports.uploadFile=((req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            res.json({
                error:err
            })
        }
        else{
            if(req.file==undefined){
                res.json({
                    error:'No file selected'
                })
            }
            else{
                res.status(201).json({
                    message:'File uploaded successfully',
                    file:"uploads/"+req.file.filename
                })
            }
        }

    })


})


