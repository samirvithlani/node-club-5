//schmea
module.exports.testApi = ((req,res)=>{

    res.json({
        message:"Test API"
    })
})
exports.getAllData = ((req, res)=>{
    
    var token =""
    //req.body --->
    //fetch ---> promise --> 5th field --->
    // var bodydata = {
    //     name:"Samir",
    //     age:23,
    //     city:"Pune"
    //     5th field

    // }
    
    

    const myData = fetch("http://localhost:3001/user/user",{
        method:"GET",
    }).then((res1)=>{

        return res1.json();
        // res1.json().then((data)=>{
        //     console.log(data);
        // })

    }).catch((err)=>{

        console.log(err);

    })
    myData.then((data)=>{
    
        
        token = data.data[0].name;

        
    })
    setTimeout(()=>{
        console.log("toke.................",token);
    },10)
    res.status(200).json({
        message:'Data fetched successfully',
    })
    
    
})
