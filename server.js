var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user : 'shivamxav',
    database : 'shivamxav',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Artticle one! Shivam Gupta',
    heading: 'Article one',
    date : 'Sep 5, 2017',
    content : `     <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                    This is the start of my first article and I have ton of assigments lined up from               college.
                    </p>`
                    },
    'article-two' : {
    title: 'Artticle Two! Shivam Gupta',
    heading: 'Article Two',
        date : 'Sep 10, 2017',
        content : `     <p>
                        This is the content for my third article.
                        </p>`
    },
    'article-three' : {
    title: 'Artticle Three! Shivam Gupta',
    heading: 'Article Three',
        date : 'Sep 15, 2017',
        content : `     <p>
        This is the content for my third article.
            </p>`
            }

    
};


function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate  = `
<html>
        <head>
        <title>
            ${title}
        </title>
            <meta name="viewport" content="width=device-width,intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>

    <body>
        <div class="container">
            <div>
            <a =href="/"/>HOME</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div
    </body>
</html>
`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res) {
    // select request 
    // return a response with the results
    pool.query('SELECT * FROM test', function (err, result) {
        if(err) {
            res.status(500).send(err, toString());
        }
        else {
            res.send(JSON.stringify(result));
        }
    });
});

function hash(input, salt) { 
    
    var hashed = crypto.pbkdf2Sync(input, salt, 1000, 512, 'sha512');
}

app.get("/hash/:input", function(req, res) {
   // var input = req.params
    var hashed = hash(input, salt);
});

var counter=0;
app.get("/counter", function (req, res)
{
    counter=counter+1;
    res.send(counter.toString());
});

var names = [];
app.get("/submit-name", function( req, res){ //changing :name to ?. now URL /submit-name?name=abc 

    //get the name from the request
    var name=req.query.name; //changing params to query the morgam package enables us to get the query abject
    console.log(name);
    names.push(name);
    //JSON - JAvascript object notation, which converts js objects into string
    res.send(JSON.stringify(names));// we are sending back imformation as a string using json
    // How does this make sense, we cannot send a javascript array, res can only send bytes of data, like strings.

});

app.get('/articles/:articleName',function (req, res) {
        //articleName == article-one
        //articles[articleName]== {} content objects for article one
        //var articleName = req.params.articleName;
        
        pool.query("SELECT * FROM article WHERE title = " + req.params.articleName, function(err, result) {
            if(err) {
               // window.alert('Error generated');
                res.status(500).send(err, toString());
            }
            else {
                if(result.rows.length === 0) {
                
                    res.status(404).send("Article Not Found");
                }
                else {
                    var articleData = result.rows[0];
                    res.send(createTemplate(articleData));
                }
            }
        });
    
        });



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
