const number = Number(process.argv[2]);
if (isNaN(number) || !Number.isInteger(number) || number < 0) {
  console.log("Invalid input");
  process.exit(1);
}
