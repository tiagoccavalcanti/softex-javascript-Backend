//-->converte uma temperatura informada em celciius para fahrenheit
const prompt = require('prompt-sync')({sigint: true});

var c = Number(prompt('digite uma temperatura em celcius para ser convertida: '));

console.log(`a temperatura equivalente, em Fahrenheit é: ${(9*c+160)/5}`);