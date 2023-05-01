const xlsx = require("xlsx");
const storeFileData = require("../model/StoreFileData");

const readDataFromFile = () => {
  const file = xlsx.readFile("./uploads/b1.xlsx");
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

exports.readDataFromFile  = (req, res) => {
    var data = readDataFromFile();
    storeFileData.insertMany(data, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occurred while creating the data.",
            })
        }
        else {
            res.status(200).json({
                message: "Data inserted successfully",
                data: result
            })
        }
    })


   
}

