// 4.Ler 10 números e exibir a soma dos números ímpares.

const prompt = require("prompt-sync")();

let num, soma = 0;

for(let i=0; i<10; i++){

    num = parseInt(prompt(i+1+ " - Digite um número: "))
    
    if (num % 2 !== 0){
        soma = soma + num;
    }
}

console.log("A soma dos números ímpares digitados é de: ", soma);