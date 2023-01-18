const mailer = require('nodemailer');

const sendMail = async (to)=>{

    let transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, //465 for ssl
        secure: false, // true for 465, false for other ports
        auth:{
            user:"samir.royal4all@gmail.com",
            pass:"fhtqlkwefxbxmhlw"
        } 
    })

    const mailOptions ={
        from:'samir.royal4all@gmail.com',
        to:to,
        subject:'Test Mail-1',
        text:'Hello by by'
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
sendMail('pranjalkenil1234@gmail.com')