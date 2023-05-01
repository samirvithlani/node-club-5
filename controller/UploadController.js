const multer = require("multer");
const path = require("path");
const xlsx = require("xlsx");


const storage = multer.diskStorage({
    destination:'./uploads',
    filename: (req, file, ab) => {
      ab(null, file.originalname);
    },
  });
  
  const upload = multer(
  {
    storage: storage,
    limits: { fileSize: 9000000 },
  
  }).single("file");

  const readDataFromFile = (file1) => {
    const file = xlsx.readFile(file1);
    const sheets = file.SheetNames;
    console.log(sheets);
    var data = [];
  
    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }
    return data;
  };

exports.uploadFile = (req, res) => {
  
  upload(req, res, (err) => {
    var data1 = readDataFromFile(req.file.path);
    console.log(data1);
    console.log("Request ---", req.body.name);
    if (err) {
      return res.status(400).json({ error: err.message });
    } 
    else {
      res.json({
        file: req.file,
        message: "File uploaded successfully",
      })
    }
  });
};
