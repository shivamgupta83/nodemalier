const nodemailer = require("nodemailer");
require('dotenv').config()
 
const sendMail = async (req,res) =>{
console.log(req.body.email)
await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service : "gmail",
      auth: {
          user: process.env.USER,
          pass:  process.env.PASS
      }
    });

 let Option = {
      from: 'hameshaaavaj@gmail.com>',
      to: req.body.email,
      subject: "Hello ✔",
      text: "Hello world?",
     
    }

     transporter.sendMail(Option,(err,info)=>{
      if(err) console.log(err)

      else {
        console.log("email responce ---> : " + info.response)
        console.log("Message sent: %s", info.messageId);
      
        res.send({"mail send ---> " : info.response} );
      }
    })


}

module.exports = sendMail;
