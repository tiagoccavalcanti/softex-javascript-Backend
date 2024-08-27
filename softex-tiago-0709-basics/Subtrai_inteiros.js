//--> subtrai dois numeros inteiros
const prompt = require('prompt-sync')({sigint: true})

var n1 = parseInt(prompt('digite o primeiro numero para ser 0 minuendo: '));
var n2 = parseInt(prompt('digite o segundo numero para ser subtraendo: '));
console.log(`A subtração dos números digitados é ${n1-n2}`);