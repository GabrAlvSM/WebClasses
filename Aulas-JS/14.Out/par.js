const prompt = require("prompt-sync")();

var numero;

numero = parseInt(prompt("Escreva aí painho: "));

// console.log(numero)
if(numero % 2 === 0){
    console.log(numero, "é par!");
}
else{
    console.log(numero+ " é impar!");
}
