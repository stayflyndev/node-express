const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const router = express.Router();
const env = require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));
app.use(express.static(__dirname, + 'public'));

const port =  process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Example app listening on port !` + port);
   });

   
 app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" )    // res.sendFile( __dirname + "/" + "index.html" )
});
app.get('/contact', function (req, res) {
    res.sendFile( __dirname + "/" + "contact.html" )
  })

  // POST route from contact form
app.post('/contact', function (req, res) {
    
    let mailOpts, smtpTrans;
    
    smtpTrans = nodemailer.createTransport({
       
    //   host: 'smtp-relay.sendinblue.com',
    //   port: 587,
    //   secure: true,
    //   auth: {
    //     user: EMAIL,
    //     pass: PASSWORD

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
         pass: process.env.PASSWORD

      }
    });
    mailOpts = {
      from:'aretee64@gmail.com',
      to: process.env.EMAIL,
      subject: 'New message my lady',
      text: `hjhjjhj`
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        return console.log("this is the" + error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    });
  });



app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
    console.log(req.body.firstName)
});



