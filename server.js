const http = require('http');
const fs = require('fs');
const generator = require('generate-password');
const nodemailer = require('nodemailer');

 http.createServer((req, res) => {
  res.setHeader('Content-Type','text/html');
  res.end('<h1>Hello Node</h1>');
}).listen(8010);


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
});
fs.readFile('./welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contents of welcome.txt:', data);
});

var passwords = generator.generateMultiple(3, {
    length: 10,
    uppercase: false
});
// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chakrounaloulou6@gmail.com',
      pass: '24081999'
    }
  });
  
  var mailOptions = {
    from: 'chakrounaloulou6@gmail.com' ,
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'Email sent : '
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
