
const {lookahead} = require('./base');

//Positive lookahead 

console.log(lookahead.match(/.+(?=[^in]active)/gim));
//Negativa lookahead
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//lookbehind
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));
//Negative lookbehind
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

