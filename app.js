//const name = require('./calc')
//const add = require('./calc')
const calc = require('./calc')
const http = require('http')
const file = require('./filehandling/File1')

console.log(calc.add(4,5))
console.log(calc.name)
calc.addUser("royal")
console.log(calc.employeeName)


//file.WriteDataToFile()
//file.readDataFromFile()
//file.deleteFile()
//file.CreateFolder()
//file.CopyFile()
//file.writejson()
file.readJson()



const server = http.createServer()
server.listen(3000,()=>{
    console.log("Server started at port 3000")
})

///require('./calc1')
//http module --> express MERAN   E express