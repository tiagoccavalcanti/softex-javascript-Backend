//-->Elabore um programa que leia uma letra e informe se esta letra é uma vogal ou uma consoante.
const prompt = require('prompt-sync')({sigint: true});

// var letra = prompt('escreva uma letra e diremos se é vogal ou consoante');

vogal_consoante();

function vogal_consoante(){

    var letra = prompt('escreva uma letra e diremos se é vogal ou consoante');

    switch(letra){
        case 'a':
            console.log(`${letra} é uma vogal`);
            break

        case 'e':
            console.log(`${letra} é uma vogal`);
            break

        case 'i':
            console.log(`${letra} é uma vogal`);
            break

        case 'o':
            console.log(`${letra} é uma vogal`);
            break

        case 'u':
            console.log(`${letra} é uma vogal`);
            break

        default :
            console.log(`${letra} é uma consoante`);
            break
    }
    vogal_consoante();
}
