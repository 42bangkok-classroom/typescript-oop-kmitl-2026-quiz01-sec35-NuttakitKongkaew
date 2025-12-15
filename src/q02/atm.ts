const maxWithdraw = 5000;
const balance = Number(process.argv[2]);
const withdrawAmount = Number(process.argv[3]);

if (isNaN(balance) || isNaN(withdrawAmount)) {
    console.log("Invalid Input");
    process.exit(1);
} else if (withdrawAmount > balance) {
    console.log("Insufficient balance");
} else if (withdrawAmount > maxWithdraw) {
    console.log("Exceeds per-withdrawal limit");
} else {
    console.log("Withdrawal approved");
}