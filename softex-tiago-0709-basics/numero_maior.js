//--> le dois numeros e fala qual o maior dos dois

const prompt = require('prompt-sync')({sinint: true});

var n1 = Number(prompt('escreva um numero para ser comparado :'));
var n2 = Number(prompt('escreva o segundo numero para ser comparado: '));

if(n1 > n2){
    console.log(`${n1} é maior que ${n2}`);
}else if(n2 > n1){
    console.log(`${n2} é maior que ${n1}`)
}else{
    console.log(`os numeros ${n1} e ${n2} sao iguais`)
}