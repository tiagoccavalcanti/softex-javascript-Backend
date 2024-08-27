// Elabore um algoritmo que escreva apenas os números pares de 1 a 100.
const prompt = require('prompt-sync')({sigint: true});

/*for(var i = 2 ; i <= 100; i+=2){
    console.log(i);
}*/

for(var i = 1 ; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}