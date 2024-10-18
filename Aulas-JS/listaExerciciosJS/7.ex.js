// 7. Ler diversos números e exibir quantos foram digitados. O valor -1 é código de fim de entrada.   

const prompt = require("prompt-sync")();

let num = 0;
// let soma = 0;
let contador = 0;

for(let i=0; i<100; i++){

    num = parseInt(prompt(i+1+ " - Digite um número: "))
    
    if (num === -1){
        break;
    }
    else{
        // parseInt(soma = soma + num);
        parseInt(contador = contador + 1);
    }
}

console.log("\nA quantidade de valores digitados é de: "+ contador);