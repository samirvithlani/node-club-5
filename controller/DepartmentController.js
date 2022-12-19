const departmentSchema = require('../model/DepartmentSchema');

exports.createDepartment = (req, res) => {
    const department = new departmentSchema(req.body);
    department.save((err, success) => {
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