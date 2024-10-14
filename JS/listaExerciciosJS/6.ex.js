// 6.Ler diversos números e exibir qual foi a soma. O valor -999 é código de fim da entrada. 

const prompt = require("prompt-sync")();

let num, soma = 0;

for(let i=0; i<100; i++){

    num = parseInt(prompt(i+1+ " - Digite um número: "))
    
    if (num === -999){
        break;
    }
    else{
        parseInt(soma = soma + num);
    }
}

console.log("A soma dos números digitados é de: ", soma);