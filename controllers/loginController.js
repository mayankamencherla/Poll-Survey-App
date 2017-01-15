// Login page of the app

var mongodb = require('mongodb');

module.exports.controller = (app) => {
    app.get('/', (request, response) => {
        response.render('signin.hbs', {
            welcomeUrl: '/welcome',
            signupUrl: '/signup'
        });
    });

    app.post('/welcome', (request, response) => {
        console.log(request.body);
        response.send('Welcome');
    });

    app.get('/signup', (request, response) => {
        response.send('Signing up');
    });
}