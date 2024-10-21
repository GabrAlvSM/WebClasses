// 10. Escreva um algoritmo que calcule e imprima a tabuada do 2,3,4,5,6,7,8,9,10 (1 a 10).

let num1 = 1;
let num2 = 1;
let resp = 0;

do {
    
    // console.log(num1)

    while (num2 < 11) {
        // resp = (num1 * num2)
        console.log(num1, "*", num2, "=", (resp = (num1 * num2)))
    
        num2 = (num2 + 1)
    }
    
    num1 = (num1 + 1);
    num2 = 1;
    console.log("--------")
}
while (num1 < 11)

console.log("Fim!")