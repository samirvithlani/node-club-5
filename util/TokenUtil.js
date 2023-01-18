const jwt = require('jsonwebtoken');
const secret = " ";

const genertateToken =(user)=>{

    jwt.sign({user},secret
    ,{expiresIn:"1h"}
    ,(err,token)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(token);
        }
    })
}
//genertateToken({name:"saurabh",id:1})
const validateToken = (token) = (req,res,next)=> {
    //const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token,secret,(err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
        }
    })
}
validateToken("eyJhbGciOiJIUzmI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJzYXVyYWJoIiwiaWQiOjF9LCJpYXQiOjE2NzM4NzQ0MDEsImV4cCI6MTY3Mzg3ODAwMX0.VClcJ9U24VhokNPHvRauEpwR7Xhkt9tUNXDktC2t5L0")