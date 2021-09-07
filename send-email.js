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
      user: 'ayushpatel1801@gnu.ac.in',
      pass: 'gnu@12112000'
    }
  });
  
  var mailOptions = {
      /*
    from: 'ayushpatel1801@gnu.ac.in',
    to: 'rakupatel219@gmail.com',
    subject: 'send by node',
    text: `this email send by node.js `*/

    from: 'ayushpatel1801@gnu.ac.in',
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


