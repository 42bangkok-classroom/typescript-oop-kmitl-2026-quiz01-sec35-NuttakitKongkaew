const arg = process.argv[2];
const n = Number(arg);

if (!arg || isNaN(n) || !Number.isInteger(n) || n < 0) {
  console.log("Invalid Input");
  process.exit(1);
}

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(`Sum: ${sum}`);