// 8. Ler diversos números e exibir quantos números ímpares foram digitados. Considere o valor - 999 como código fim de entrada. 

const prompt = require("prompt-sync")();

let num, soma = 0;

for(let i=0; i<1000; i++){

    num = parseInt(prompt(i+1+ " - Digite um número: "))
    
    if (num === -999){
        break;
    }
    else{
        if (num % 2 !== 0){
            parseInt(soma = soma + num);
        }
    }
}

console.log("A soma dos números ímpares digitados é de: ", soma);