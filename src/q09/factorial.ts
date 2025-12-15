const num1 = Number(process.argv[2]);
const number = Number(num1);

if (number === 0) {
  console.log(1);
  process.exit(0);
}

if (!num1 || isNaN(number) || !Number.isInteger(number) || number <= 0) {
  console.log("Invalid Input");
  process.exit(1);
}

let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(factorial);