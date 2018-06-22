'use strict';

var express       = require('express'),
    app           = express(),
    ip            = '127.0.0.1',
    port          = 80;

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.locals.resources = require('./app/resources');


var controllers = require('./app/controllers.js');
require('./app/routes.js')(app, controllers);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
