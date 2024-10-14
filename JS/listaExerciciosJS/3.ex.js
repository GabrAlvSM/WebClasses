// 3.Ler 10 números e exibir o maior número.

const prompt = require("prompt-sync")();

const listaNum = [];

for (let i = 0;i < 10; i++){

    listaNum[i] = parseInt(prompt(i+1+ "- Digite um número: "));
}

console.log("O maior valor informado: ", Math.max(...listaNum));


