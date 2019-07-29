const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('css'));


app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" )
})

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
    console.log(req.body.firstName)
});

var server = app.listen(8081, function () {
    var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", port)
})

