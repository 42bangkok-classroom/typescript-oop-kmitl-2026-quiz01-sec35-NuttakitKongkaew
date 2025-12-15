const arg = process.argv[2];
const n = Number(arg);

if (isNaN(n) || !Number.isInteger(n) || n < 1) {
  console.log("Invalid Input");
  process.exit(1);
}

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log("FooBar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 7 === 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}
