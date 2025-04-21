//* (opcionais) 0 ou n
//+ (obrigatorio) 1 ou n
//? (opcionais) 0 ou 1
// \ caractere de escape
// {n, m} minimo e maximo
const {texto, arquivos} = require('./base');

const regExp1 = /Exe+mp+l+o+/gi;
const regExp2 = /\.jpe{0,1}g/gi;
console.log(texto.match(regExp1));

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regExp2));
}





