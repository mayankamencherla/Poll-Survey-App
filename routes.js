/* ------------------------- Setup express ----------------------------- */
const express = require('express');

var app = express();

// All the static content goes here
app.use(express.static(__dirname + '/views')); 

/* ------------------------- Routes begin ----------------------------- */

// Login page of the app
app.get('/', (request, response) => {
    response.sendFile('/index.html');
});

/* -------------------------- Routes end ------------------------------ */

app.listen(3000, () => {
    console.log('Server up and running on port 3000');
});