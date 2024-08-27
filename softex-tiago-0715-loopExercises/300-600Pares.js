// Elabore um algoritmo que escreva apenas os números pares de 300 a 600.
const prompt = require('prompt-sync')({sigint: true});

var i = 300;
/*do{
    if(i % 2 == 0){
        console.log(i);
    }
    i++
}while(i <= 600);*/

do{
    console.log(i);
    i+=2;
}while(i <= 600);