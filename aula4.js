
const {texto, arquivos, html, alfabeto} = require('./base');
//Range [-]
//[] encontrar um conjunto
//^ negação
console.log(alfabeto);
console.log(alfabeto.match(/[abc]+/gi));
console.log(alfabeto.match(/[^abc123]/gi));
console.log(alfabeto.match(/[0-9]+/gi));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));


