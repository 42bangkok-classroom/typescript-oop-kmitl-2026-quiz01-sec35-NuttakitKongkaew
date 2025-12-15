const operator = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]); 

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input");
  process.exit(1);
}

if (!operator) {
  console.log("Invalid input");
  process.exit(1);
}

const lowcase = operator.toLowerCase();

switch (lowcase) {
  case "add":
    console.log(num1 + num2);
    break;
  case "sub":
    console.log(num1 - num2); 
    break;
  case "mul":
    console.log(num1 * num2);
    break;
  case "div":
    if (num2 === 0) {
      console.log("Invalid input");
      process.exit(1);
    } else {
      console.log(num1 / num2);
    } 
    break;
  default:
    console.log("Invalid operator");
    process.exit(1);
}
