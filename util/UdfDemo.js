const testData =()=>{

}
function post(obj){

    auth("student")(obj)
}



const auth = (obj) => (object)=> {


    console.log("Auth Middleware",obj)
    console.log("Auth Middleware",object.req)
    //console.log("Auth Middleware",req)

}

post({req:"samir",res:"sam",next:"next"})