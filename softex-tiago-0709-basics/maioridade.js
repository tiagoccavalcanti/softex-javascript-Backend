//-->determina se chegou na maioridade ou nao e fala quanto anos ainda faltam (para chegar)
const prompt = require('prompt-sync')({sigint: true});

var idade = Number(prompt('diga quantos anos você tem, e direi se ja eh uma adulto: '));

if(idade >= 18){
    console.log(`Parabéns meus mano! Ja está com ${idade} anos, ja é maior de idade.`);
}else{
    console.log(`Que pena irmao, ainda faltam ${18 - idade} anos pra maioridade.`)
}