var nodemailer = require('nodemailer');
var http=require('http');
var url=require('url');
var  r1=require("readline");


//take input 
var r2=r1.createInterface(process.stdin,process.stdout);
r2.question("enter Email:",function(email){

    r2.question("enter subject:",function(subject){
        r2.question("enter message:",function(message){

            console.log("name: "+email);
            console.log("name: "+subject);
            console.log("name: "+message);



      //send mail      
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: // type your sender email
      pass: //type password
    }
  });
  
  var mailOptions = {
      

    from: //sender email,
    to: email,
    subject: subject,
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

        });
    });
});


