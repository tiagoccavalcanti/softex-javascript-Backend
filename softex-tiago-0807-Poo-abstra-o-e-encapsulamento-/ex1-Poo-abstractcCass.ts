// --> Transporte
/* abstract class Transporte {
 abstract modelo:string;
 abstract marca:string;

 preparar(): void{
  console.log("o veiculo esta pronto para sair")
 }
}

class Carro extends Transporte{
 modelo: string;
 marca: string;

 acelerar(): void{
  console.log("o veiculo esta acelerando")
 }
}

const carro1 = new Carro ()
carro1.acelerar() */


// --> InstrumentoMusical
/* abstract class InstrumentoMusical{
 abstract tipo:string;
 abstract tamanho:string;

 fazSom(){
  console.log("ta tocando musica po")
 }
}

class Guitarra extends InstrumentoMusical{
 tipo:string;
 tamanho: string;

 barulhar(){
  console.log("que barulho eh esse doidao")
 }
}

const instrumento1 = new Guitarra()
instrumento1.barulhar()
instrumento1.fazSom() */


// --> Funcionario
/* bstract class Funcionario{
 nome:string;
 atribuicao:string;

 constructor(nome:string, atribuicao:string){
  this.nome=nome;
  this.atribuicao=atribuicao;
 }
 trabalha(){
  console.log("o funcionario trabalha e o patrao descansa")
 }
}

class Gerente extends Funcionario {
 gere(){
  console.log(`supervisonado e auxiliando os geridos ${this.nome}`)
 }
}

const gerente1 = new Gerente("fulano de tal", "gerente");
console.log(gerente1.nome);
console.log(gerente1.atribuicao);
gerente1.trabalha();
gerente1.gere(); */


// --> Eletrodomestico
/* abstract class Eletrodomestico {
    abstract name:string;
    abstract marca:string;

    liga(){
        console.log("o equipamento esta ligado")
    }
    desliga(){
        console.log("o equipamento esta desligado")
    }
}

class Liquidificador extends Eletrodomestico {
    name:string;
    marca: string;

    liquidificar(){
        console.log("esta liquidificando");
    }
}

const eletro1 = new Liquidificador();
eletro1.liga();
eletro1.liquidificar();
eletro1.desliga(); */