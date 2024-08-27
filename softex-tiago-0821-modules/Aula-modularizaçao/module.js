function sayHello(){
    console.log("hello world");
}

function sayMyName(name){
    console.log(`Meu nome é ${name}`);
}

function cooking(food){
    console.log(`cooking ${food}`);
}

module.exports = {
    sayHello,
    sayMyName,
    cooking,
}