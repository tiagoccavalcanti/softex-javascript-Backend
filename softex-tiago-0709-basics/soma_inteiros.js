const prompt = require('prompt-sync')({sigint: true})
//--> Soma dois numeros inteiros

var n1 = parseInt(prompt('digite o primeiro numero para ser somado: '));
var n2 = parseInt(prompt('digite o segundo numero para ser somado: '));
console.log(`A soma dos números digitados é ${n1+n2}`);