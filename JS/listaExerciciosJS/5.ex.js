// 5-Ler 30 números e exibir a soma dos números que são divisíveis por 5. 

const prompt = require("prompt-sync")();

let soma = 0;
let num = parseInt(prompt("Digite um número para iniciar a contagem: "));

console.log("Iniciando em "+ num+ " serão contados os 30 seguintes valores!")

for(let i=0; i<30; i++){

    if (num % 5 === 0){
        parseInt(soma = soma + num);
    }

    parseInt(num = num + 1);
}

console.log("A soma dos números no intervalo que são divisíveis por 5 é de: "+ parseInt(soma));