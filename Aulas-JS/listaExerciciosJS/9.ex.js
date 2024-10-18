// 9. Ler 20 números inteiros e exibir quantas vezes o número 50 foi informado. O valor 0 é o código fim de entrada. 

const prompt = require("prompt-sync")();

let num, contador = 0;

for(let i=0; i<5; i++){

    num = parseInt(prompt(i+1+ " - Digite um número: "))
    
    if (num === 0){
        break;
    }
    else{
        if (num === 50){
            parseInt(contador = contador + 1);
        }
    }
}

console.log('O número "50" foi informado', contador , 'vezes.');