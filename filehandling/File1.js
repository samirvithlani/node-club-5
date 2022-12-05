const fs = require("fs");

///user defin
module.exports.WriteDataToFile = () => {
  //fs
  //    fs.writeFileSync('./filehandling/data.txt',"hello from node.....")
  fs.appendFileSync("./filehandling/data.txt", "hello from node.....");
};
module.exports.readDataFromFile = () => {
  var data = fs.readFileSync("./filehandling/data.txt", "utf-8");
  console.log(data);
};
module.exports.deleteFile = () => {
  if (fs.existsSync("./filehandling/data.txt")) {
    fs.unlinkSync("./filehandling/data.txt");
  } else {
    console.log("file not found");
  }
};
//create a file

function valid(filename)
{
    fs.existsSync(filename) ? true : false

}
module.exports.CreateFolder = ()=>{

    if(valid('./filehandling/assets')){

            fs.mkdirSync('./filehandling/assets')
    }
    else{
        console.log("folder already exist")
    }

}
module.exports.CopyFile = () =>{


        if(fs.existsSync('./filehandling/data.txt')){
            if(fs.existsSync('./filehandling/assets')){

                fs.copyFileSync('./filehandling/data.txt','./filehandling/assets/data.txt')
            }
            else{
                console.log("folder not found")
            }

                
        }
        else{
            console.log("file not found")
        }

}
//move file....
//rename file
//npm node pakcage manager..

module.exports.writejson = ()=>{

    var users = [
        {
            name:"royal",
            age:23
        },
        {
            name:"raj",
            age:24
        },{
            name:"ravi",
            age:25
        }
    ]

    fs.writeFileSync('./filehandling/users.json',JSON.stringify(users))
}
module.exports.readJson = () =>{

    var strData = fs.readFileSync('./filehandling/users.json','utf-8')
    var data = JSON.parse(strData)
    console.log(data)
    console.log(data[0].name)
}