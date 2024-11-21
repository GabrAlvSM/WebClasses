// let name = window.prompt("What is your name?", "John Doe");
// name = name ? name : "anonymous";
// let age = prompt("Hello " + name + " how old are you?");
// alert(name + " is " + age + " years old");


// let remove = confirm("Remove all data?");
// let message = remove ? "Deleting Data" : "Cancelled"
// console.log(message);


// let width = prompt("Volume of the box, enter width", 0);
// let height = prompt("Volume of the box, enter height", 0);
// let length = prompt("Volume of the box, enter length", 0);
// let volume = width * height * length;
// alert(`Calculated box volume is ${volume}`);


// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
//     }];
    


// let nr = "1";
// let x = (nr === 1);
// let y = (nr == 1);
// let z = (nr = 1);

// alert(`${x}, ${y}, ${z}`)
// alert(3 * 4 > 20 - 15)

// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let operand = prompt("Enter operand (+, -, * or /)");
// let result;

// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//     switch (operand) {
//         case "+": result = firstNumber + secondNumber; break;
//         case "-": result = firstNumber - secondNumber; break;
//         case "*": result = firstNumber * secondNumber; break;
//         case "/": result = firstNumber / secondNumber; break;
//         default: result = "Error: unknown operand";
//     }
// } else {
//     result = "Error: at least one of the entered values is not a number";
// }
// alert(result);

// ---------------------------

// let temperatures;
// let sum;
// let meanTemp;
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//      sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//      sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

// -------------------------

// let a = 20 + "10";
// let b = 20 + +"10";
// let c = 20 + -"10" + "10";
// let d = "10" - "10" + "100";
// let e = "A" - "B" + 0xA;
// console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

// -----------------------------


// let sum = function (a, b) {
//      return (a + b);
// }

// let sum = (a, b) => a + b;

// console.log(sum(1,2));

// ---------------------------

// let x = [10, 20, 30, 40];
// let y = [50, 60];
// x.reverse().push(y);
// console.log(x.length);

// ---------------------------

// let counter = 0;
// while (counter++ < 10) console.log(counter++);

// ---------------------------

// let route = {distance: 131, elevation: 1.4};
// for (let k in route) console.log(k);

// ---------------------------

// let mult = function (a) {
//      return function (b) {
//          return a * b;
//      }
//  }
//  console.log(mult(2)(10));

// ---------------------------

const a = "hello";

try{
     alert(a.toUpperCase());

} 
catch (error) {
     alert(a);
} 
finally {
     alert(a);
}
