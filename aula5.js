
const {cpfs2} = require('./base');
//^ Começa com
//$ Termina com
//m multiline

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2.match(cpfRegExp));




