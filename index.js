const express  = require('express');
const app =  express();
const PORT = process.env.PORT || 5000;

app.get('/',(request, response) => {
    response.send({ API_VERSION: '0.0.1'});
});

app.listen(PORT);