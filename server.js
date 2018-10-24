const express = require('express');
const app = express();

app.get('/', (request, response) => {
    let salida = {
        nombre:'Cristian',
        edad:37,
        url:request.url
    };
    response.send(salida);
});

app.get('/data', (request, response) => {
    response.send('Hola data!');
});

app.listen(3000);