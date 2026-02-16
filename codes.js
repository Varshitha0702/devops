const readlin = require('readline');
const rle = readlin.createInterface({
input: process.stdin,
output: process.stdout
});
rle.question("Enter a number: ", (num) => {
if (num % 2 === 0)
console.log("Even Number");
else
console.log("Odd Number");
rle.close();
});


function factorial(n) {
let fact = 1;
for (let i = 1; i <= n; i++) {
fact *= i;
}
return fact;
}
console.log("Factorial:", factorial(5));


const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter two numbers: ", (input) => {
let [a, b] = input.split(" ").map(Number);
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
rl.close();
});


const date = new Date();
console.log("Current Date & Time:", date.toLocaleString());
