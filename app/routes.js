'use strict';

module.exports = function(app, controllers) {
    app.get('/', function(req, res){
        res.render('layout', controllers.Index());
    });
}