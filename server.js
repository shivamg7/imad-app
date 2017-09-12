var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var counter1=0;
app.get("/counter1", function (req, res)
{
        counter1=counter1+1;
        res.send(counter1.toString());
});

var counter2=0;
app.get("/counter2", function (req, res)
        {
        counter2=counter2+1;
        res.send(counter2.toString());
        });

var counter3=0;
app.get("/counter3", function (req, res)
        {
        counter3=counter3+1;
        res.send(counter3.toString());
        });

var counter4=0;
app.get("/counter4", function (req, res)
        {
        counter4=counter4+1;
        res.send(counter4.toString());
        });


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
        res.sendFile(path.join(__dirname, 'ui', 'style.css'));
        });

app.get('/ui/main.js', function (req, res) {
        res.sendFile(path.join(__dirname, 'ui', 'main.js'));
        });







// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
