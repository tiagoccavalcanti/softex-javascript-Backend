class ContaBancaria {
 tipoDeConta:string;
 saldo:number;

 constructor(tipoDeConta:string, saldo:number){
  this.tipoDeConta=tipoDeConta;
  this.saldo=saldo;
 }

 depositar(valor:number){
   console.log(`você depositou ${valor}, na sua ${this.tipoDeConta}`)
   return this.saldo += valor;
 }

 sacar(valor:number){
  console.log(`você sacou ${valor}, da sua ${this.tipoDeConta}`)
  return this.saldo -= valor
 }

 mostrarSaldo(){
  return `você tem ${this.saldo}, em sua conta bancaria`
 }
}

const tiago = new ContaBancaria("polpança", 2000)
tiago.sacar(500);
tiago.depositar(1000)

console.log(tiago.mostrarSaldo())