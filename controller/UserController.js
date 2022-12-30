const userSchema = require("../model/UserSchema");

exports.getAllUsers = (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      // res.status(201).json({
      //     message:"Data fetched successfully",
      //     data:data
      // })

      if (data.length === 0) {
        res.status(404).json({
          message: "No data found",
        });
      } else {
        res.status(200).json({
          message: "Data fetched successfully",
          data: data,
        });
      }
    }
  });
};

exports.createUser = (req, res) => {
  //object .... req.body....
  //console.log(req.body);
  const user = new userSchema(req.body);
  user.save((err, success) => {
    if (err) {
      res.status(500).json({
        message: "Error in saving data",
      });
    } else {
      res.status(201).json({
        message: "Data saved successfully",
        data: success,
      });
    }
  });
};

exports.getUserById = (req, res) => {
  let id = req.params.id;
  //console.log(req.params);
  userSchema.findById(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Data fetched successfully",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "No data found",
        });
      }
    }
  });
};

exports.deleteUser = (req, res) => {
  let id = req.params.id;

  userSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in deleting data",
      });
    } else {
      //data......
      res.status(204).send();
    }
  });
};
exports.updateUser = (req, res) => {
  let id = req.params.id;
  try {
    if (req.body._id) {
      throw new Error("Id is not allowed to update");
    } 
    else {
      userSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
          res.status(500).json({
            message: "Error in updating data",
          });
        } else {
          res.status(200).json({
            message: "Data updated successfully",
            data: success,
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
