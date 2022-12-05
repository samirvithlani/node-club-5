var name = "royal"
function add(a,b){

    return a+b
}

//module.exports = name
//module.exports = add


module.exports = {name,add}
module.exports.addUser = (user)=>{

    console.log("User added: "+user)
}
module.exports.employeeName = "amit"
