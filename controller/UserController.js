const { db } = require('../model/UserSchema');
const userSchema = require('../model/UserSchema');

exports.getAllUsers = ((req,res)=>{

    userSchema.find((err,data)=>{

        if(err){
           res.status(500).json({
                message:"Error in fetching data",
           })
        }
        else{
            // res.status(201).json({
            //     message:"Data fetched successfully",
            //     data:data
            // })

            if(data.length === 0){
                res.status(404).json({
                    message:"No data found",
                })
            }
            else{
                res.status(200).json({
                    message:"Data fetched successfully",
                    data:data
                })
            }
        }
    })

})
