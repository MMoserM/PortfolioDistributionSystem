'use strict';

module.exports = function(app, controllers) {
    app.get('/', controllers.Index);
    app.get('/about', controllers.About);

    //Default route in case of not found
    app.use(controllers.Error404);
}