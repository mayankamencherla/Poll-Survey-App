// Login page of the app

var mongodb = require('mongodb');

module.exports.controller = (app) => {
    app.get('/', (request, response) => {
        response.render('signin.hbs');
    });
}