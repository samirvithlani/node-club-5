const RoleSchema = require('../model/RoleSchema');

exports.createRole = (req, res) => {
    const role = new RoleSchema(req.body);
    role.save((err,data)=>{
        if(err){
            return res.status(400).json({
                message: err.message
            })
        }
        else{
            return res.status(200).json({
                message: "Role Created"
            })
        }
    })
    
}