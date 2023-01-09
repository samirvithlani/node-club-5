const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = async(password) =>{
    const hash = await bcrypt.hash(password,saltRounds);
    return hash;
    
}

///////////returmnml;,kopkjio
hashPassword('raj').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


const comparePassword = async(password,hash) => {
        const res = await bcrypt.compare(password,hash);
        return res;
}

comparePassword("raj","$2b$10$KLuUDpsUUVtcpzF3j.ZCI.nGSLQfqwyZUNtWd6uQkPAvdkb6NHPQW").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})





// const hashPassword = (password) => {

//     bcrypt.hash(password,saltRounds,(err,hash)=>{
//         console.log(hash);
//     })

// }
// const comparePassword = (password,hash) => {

//     bcrypt.compare(password,hash,(err,res)=>{
//         console.log(res);
//     })

// }

// //hashPassword('raj');
// comparePassword("raj1","$2b$10$KLuUDpsUUVtcpzF3j.ZCI.nGSLQfqwyZUNtWd6uQkPAvdkb6NHPQW")


