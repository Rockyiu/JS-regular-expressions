//Flags: g-global (encontra todas as ocorrências)
//i - insensitive (Não checa letra maiscula ou minusculas)
//() grupos
// | ou
const {texto} = require('./base');
const regExp1 = /Exemplo/gi;
const regExp2 = /(Exemplo|Teste) (expressões regulares)/gi;
const found = regExp2.exec(texto);

console.log(regExp1.test(texto));
console.log(regExp1.exec(texto));
console.log(regExp2.exec(texto));

if(found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
