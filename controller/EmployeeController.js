const employeeSchema = require('../model/EmployeeSchema');

exports.createEmployee = (req, res) => {
    const employee = new employeeSchema(req.body);
    employee.save((err, success) => {
        if (err) {
        res.status(500).json({
            message: 'Error in saving data',
        });
        } else {
        res.status(201).json({
            message: 'Data saved successfully',
            data: success,
        });
        }
    });
}
exports.getEmployee = (req,res)=>{

    employeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:'Error in fetching data'
            })
        }
        else{
            res.status(200).json({
                message:'Data fetched successfully',
                data:data
            })
        }
    })





        // employeeSchema.find((err,data)=>{

        //     if(err){
        //         res.status(500).json({
        //             message:'Error in fetching data'
        //         })
        //     }
        //     else{
        //         res.status(200).json({
        //             message:'Data fetched successfully',
        //             data:data
        //         })
        //     }

        // })



}

