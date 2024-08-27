// as classes abstratas so podem ser usadas para funcionar com uma generalização ds classes que serao usadas no projeto, de modo que vai funcionar como um SUPER(?) e as classses relacionadas podem usar os parametros e funcionalidades genericas presentes nesta
abstract class Animal {
 name:string;

 emitirSom(): void {
  console.log("fazendo som");
 }

 mover(): void {
  console.log("o animal esta se movendo");
 }
}

class Cachorro extends Animal{}

class Gato extends Animal{}


// MODIFICADORES DE ACESSO
// esse tipo de funcionalidade esta relacionada com o encapsulamento de modo que permite proteger os dados de alterações externas e melhorar o controle do que eh ou nao acessado pelo usiario.

/* --> public - o metodo ou atributo pode ser acessado a qualquer momento e por qualquer usuario ou outra funcionalidade dentro ou fora da classe em que o atributo/metodo foi criado 

-->private - o atributo/metodo, apenas podera ser acessado dentro da classe em que foi criado. E util par proteger atributos que nao devem ser vistos por qualquer usuario ou limitar o acesso a metodos de uso interno exclusivo da classe (protege e organiza o codigo)


--> protected - esse tipo de modificador pode ser usado apenas dentro de classes abstratas e isso eh tudo que sei por enquanto*/

