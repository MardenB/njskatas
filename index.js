const express  = require('express');
const app =  express();
const PORT = process.env.PORT || 5000;

app.get('/',(request, response) => {
    response.send({ hi: 'there'});
});

app.listen(PORT);