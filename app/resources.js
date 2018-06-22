function msg (localizer, path, fallback) {
    try {
        var fullPath = './template/resources/'+path+'.json';
        var file = require(fullPath);
        if (typeof (file) != undefined) {
            return file[localizer] || fallback || localizer;
        }
    } catch (e) {
        return fallback || localizer;
    }
}

function msgf (localizer, path, ...parameters) {
    try {
        var fullPath = './template/resources/'+path+'.json';
        var file = require(fullPath);
        if (typeof (file) != undefined) {
            var formated = file[localizer];
            for( var i = 0; i < parameters.length; i++) {
                formated = formated.replace('{'+i+'}', parameters[i]);
            }
            return  formated || localizer;
        }
    } catch (e) {
        return localizer;
    }
}

module.exports = {
    msg: msg,
    msgf: msgf,
}