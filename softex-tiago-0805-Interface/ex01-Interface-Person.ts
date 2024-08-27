interface Person {
 name:string;
 age:number;
}

function sayhello(person:Person):string{
 return `olá ${person.name}! Você tem ${person.age} anos`
}

const aluno:Person = {name:"tiago", age:24}

sayhello(aluno)