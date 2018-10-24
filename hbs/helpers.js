const hbs = require('hbs');

// Helpers
hbs.registerHelper('get_anio', () => new Date().getFullYear());
hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabra, ix) => {
        palabras[ix] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});