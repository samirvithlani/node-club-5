const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 9000000 },
  
  }).single("file");
exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
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
