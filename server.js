var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    usersController = require('./server/controllers/contacts-controller');


app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/js/angular', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/', express.static(__dirname + '/client'));


//REST API
app.get('/api/contacts', usersController.getAll);
app.post('/api/contacts', usersController.addContact);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})


