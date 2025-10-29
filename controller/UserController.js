const userSchema = require("../model/UserSchema");
const bcrypt = require("bcrypt")

exports.filterUser = (req, res) => {
  //filter user data using query params

  //console.log(name,email,age);
  //find data using ...query
  console.log(req.query);
  userSchema.find({ ...req.query }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      if (data.length === 0) {
        res.status(200).json({
          message: "No data found",
          data: [],
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

exports.filterUserData = async (req, res) => {
  console.log(req.query);
  try {
    var users = await userSchema.find({ ...req.query });
    if (users) {
      res.status(200).json({
        message: "Data fetched successfully",
        data: users,
      });
    } else {
      res.status(200).json({
        message: "No data found",
        data: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error in fetching data",
    });
  }
};

exports.searchUserByName = (req, res) => {
  const name = req.params.name;
  userSchema.find({ name: { $regex: name, $options: "i" } }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
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

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Check if user exists by email
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    // Step 2: Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Step 3: Login success
    return res.status(200).json({
      message: "Login successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in login",
      error: err.message,
    });
  }
};


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
  
  try {
    const password = req.body.password;
    if(password==undefined){
      return res.json({
        message:"password is required"
      })
    }
    
    const hashedPassword = bcrypt.hashSync(req.body.password,10)
    
    const user = new userSchema({...req.body,password:hashedPassword});
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
  } catch (err) {
    res.status(500).json({
      message: "error while adding data",
      err: err,
    });
  }
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
    } else {
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

exports.test = (req, res) => {
  res.status(200).json({
    message: "Test API",
    flag: 1,
  });
};
