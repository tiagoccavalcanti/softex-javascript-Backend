//-->Le um numero e informa se ele e par ou impar
const prompt = require('prompt-sync')({sigint: true});

var num = Number(prompt('digite um numero para sabermos se eh par ou impar: '));

if(num % 2 == 0){
    console.log(`o numero ${num}, é par`);
}else{
    console.log(`o numero ${num}, é impar`);
}