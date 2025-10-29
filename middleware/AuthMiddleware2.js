const userSchema = require("../model/UserSchema")
const secret = "samir"
const jwt = require("jsonwebtoken")

const AuthMiddlware1 = async(req,res,next)=>{


    var token = req.body.Authorization
    if(token){

        if(token.startsWith("Bearer ")){
            token = token.split(" ")[1]
            try{

                const objfromtoken = jwt.verify(token)
                const foundUser = await userSchema.findById(objfromtoken.id)
                if(foundUser){
                    next()
                }
                else{
                    return new Error("invalid user")
                }

            }catch(err){
                res.status(401).json({
                    message:"invalid token",
                    err:err
                })
            }
        }else{
            res.status(401).json({
                message:"token is not bearer token"
            })
        }

        
    }else{
        res.status(401).json({
            message:"token is missing.."
        })
    }


}
module.exports= {
    AuthMiddlware1
}