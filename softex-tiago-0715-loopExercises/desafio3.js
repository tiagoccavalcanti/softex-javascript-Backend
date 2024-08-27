// A Sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores. Os 10 primeiros termos desta sequência são 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
const prompt = require('prompt-sync')({sigint: true});

/*var a = 0;
var b = 1;
var c = 0

console.log(a)
console.log(b)

// lembrar dessa porra desse algoritimo safado e facinho de fzr meu mano
// ir trocando os valores das variaveis pra ir avançando no codigo
for(var i = 0; i <= 10; i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}*/

// usando o metodo recursivo:
// foi mais chato pq eu estava com a cabeça cansada e acabei tendo que usar o for do mesmo jeito(talvez consiga fzr a mesma coisa usando menos codigo)
var x = 0; 

for(var i = 0; i <=100000 ; i++){
    console.log(sequencia_fibas(x));
    x++;
}

function sequencia_fibas(n){

    if(n == 0 || n == 1){
        return n;
    }else{
        return sequencia_fibas(n-1)+sequencia_fibas(n-2);
    }
}