const RoleScnohema = require('../model/RoleSchema');

const auth  = ()=> async(req,res,next)=>{

    //console.log("Auth Middleware",req.headers.auth)
    obj = req.headers.auth
    RoleSchema.findOne({_id:obj},(err,data)=>{
        if(err){
            return res.status(400).json({
                message: err.message
            })
        }
        else{
            if(data){
                console.log(data)
                return next()
            }
            else{
                console.log(data)
                return res.status(400).json({
                    message: "You are not a student"
                })
            }
        }

    })
        // try{
            
        //     if(obj === "student"){
        //         return next()
        //     }
        //     else{
        //         throw new Error("You are not a student")
        //     }

        // }catch(err){

        //     return res.status(400).json({
        //         message: err.message
        //     })
                
        // }

}
module.exports = {auth}