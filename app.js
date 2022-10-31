var express = require("express"); 
const path = require('path');
const cfenv = require('cfenv');
const cfenv = require('cfenv');
const cfenv = require('cfenv');

var app  =  express(); 
var appEnv = cfenv.getAppEnv();
var url = process.env.url
app.set('port', (process.env.PORT || 9981))
app.use(express.static(__dirname + '/images'))


app.get('/mithuntechnologies', function(request, response) {
    response.write("<h2><center><u>Node JS  Application </u></center></h2>");
	
    response.write("<h2><center>Welcome to  Mithun Technologies. Please Contact +91-9980923226,++91-9980923216 for more information or send an email to devopstrainingblr@gmail.com <center></h2>" );
    response.end();
    
  })
 

app.get("/html", function(req,res){
    res.set("Content-Type","text/html");
    res.write("<h2>Welcome Docker</h2>");
    res.write("<h2>/html call</h2>");
    res.end();
    
    });
    app.get("/jsonData", function(req,res){
        res.type('json');
        res.send({
		'name': 'Mithun Technologies',
		'technology': 'DevOps',
		'contact' : '9980923226',
		'email': 'devopstrainingblr@gmail.com'
	            });
        
        });
app.get("/queryparam", function(req,res){
res.send(req.query.key + ": " + req.query.name);
});

app.get("/status-code-404", function(req, res) {
      res.status(404).send('Sorry, we cannot find that!');
})

app.get("/status-code-500", function(req, res) {
   res.status(500).send('Internal Server Error – custom message');
})

app.get('/redirect', function(req, res) {
        res.redirect('http://mithuntechnologies.com');
    });
    
 
    app.listen(app.get('port'), function() {
        console.log("Node JS app is running at http://localhost:" + app.get('port') +"/mithuntechnologies");
      })
    




