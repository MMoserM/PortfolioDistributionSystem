'use strict';

function hooks(prefix, name) {
    try {
        var hook = require('./resources/hooks.js');
        if (typeof (hook) != undefined) {
            var hookName = prefix + name
            for (var k of hook[hookName]) {
                require(k);
            }
        }
    } catch (e) {
        console.log('Hook not initialized:', prefix + name);
    }
}

function controller (name, callback) {
    return function (req, res) {
        hooks('before', name);
        callback(req, res);
        hooks('after', name);
    }
}

function ensure (name, guards, controller) {

}

function ensure (name, controller) {

}

module.exports = {
    hooks: hooks,
    controller: controller,
}