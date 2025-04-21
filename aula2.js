
const {texto} = require('./base');
const regExp1 = /Exemplo|Teste/gi;


console.log(regExp1.test(texto));
console.log(regExp1.exec(texto));
console.log(texto.match(regExp1));
console.log(texto.replace(regExp1, 'Batman'));
console.log(texto.replace(regExp1, function(input) {
    return input.toUpperCase();
}));


