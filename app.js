/* ------------------------- Setup express ----------------------------- */
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Creating an express server and setting all the view + static content
var app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public')); 

/* ------------------------- Routes begin ----------------------------- */

fs.readdirSync('./controllers').forEach((file) => {
    if (file.substr(-3) === '.js') {
        route = require('./controllers/' + file);
        route.controller(app);
    }
});

/* -------------------------- Routes end ------------------------------ */

app.listen(3000, () => {
    console.log('Server up and running on port 3000');
});