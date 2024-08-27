/* interface Person {
 name:string;
 // o uso da interrogação faz com que o atributo age seja opicional
 age?:number;
}

const person:Person={name:"tiago", age: 24};

// essa variavel nao mostra erro pq 
const person2:Person = {name:"fulano"};



interface Person2{
 sayhello():void;
 //como objeto uma interface pode receber uma função e como no caso anterior a interrogação marca a nao obrigatoriedade
 walk?():void;
}

const person3:Person2 = {
 sayhello() {
     console.log(`ola myfriend`)
 }
} */