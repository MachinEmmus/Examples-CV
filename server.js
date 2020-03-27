var express = require('express');
var cors = require('cors');

var app = express();
var path = require('path');


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

//cross origin request
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

module.exports = {
    app,
    express
};
