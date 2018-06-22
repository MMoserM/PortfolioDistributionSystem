'use strict';

var helper = require('./helpers.js')

module.exports = {
    Index: helper.controller('Index', function (req, res) {
        res.render('layout', { 'page': 'index'});
        return;
    }),
    About: helper.controller('About', function (req, res) {
        res.render('layout', { 'page': 'about' });
    }),
    Error404: helper.controller('Error', function (req, res) {
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render('layout', { 'page': '404' });
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text.send()
        res.type('txt').send('Not found');
    }),
}