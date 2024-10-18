// 5-Ler 30 números e exibir a soma dos números que são divisíveis por 5. 

const prompt = require("prompt-sync")();

let soma = 0;

for(let i=0; i<30; i++){
    var num = parseInt(prompt(i+1+ " - Digite um número: "));

    if (num % 5 === 0){
        parseInt(soma = soma + num);
    }

    num = num+1;
}

console.log("A soma dos números no intervalo que são divisíveis por 5 é de: "+ soma, num);