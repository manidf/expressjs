
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res) {
   var people = [
      {
         first_name: "Mannuel",
         last_name: "Ferreira",
         age: "33",
         gender: "male"
      },
      {
         first_name: "Refilwe",
         last_name: "Ferreira",
         age: "33",
         gender: "female"
      },
      {
         first_name: "Joe",
         last_name: "blogs",
         age: "63",
         gender: "male"
      }
   ];

   res.json(people);
});

app.get('/downloads', function(req, res) {
   res.download(path.join(__dirname, '/downloads/ng-book.pdf'));
});

// redirect route
app.get('/about', function(req, res) {
   res.redirect('/about.html');
});

// POST request
app.post('/subscribe', function(req, res) {
   var name = req.body.name;
   var surname = req.body.surname;
   var email = req.body.email;
   console.log(name + ' has subscribed with ' +email);
});

// get request , route runs a function and accepts two objects
/* //ROUTES
app.get('/', function(reg, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req, res) {
   res.sendFile(path.join(__dirname, 'about.html'));
});
*/

app.listen(3000, function() {
   console.log('Server started on port 3000');
});