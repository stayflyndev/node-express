const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('css'));
// app.use(express.static(path.join(__dirname, 'public')));

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




app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
    console.log(req.body.firstName)
});



