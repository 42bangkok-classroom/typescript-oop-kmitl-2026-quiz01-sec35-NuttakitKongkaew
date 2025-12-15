const inputGrade = process.argv[2];
const grade = Number(inputGrade);

if (isNaN(grade) || grade > 100 || grade < 0 || !Number.isInteger(grade)) {
    console.log("Invalid Input");
    process.exit(1);
} else if (grade >= 80) {
    console.log("Grade is A");
} else if (grade >= 70) {
    console.log("Grade is B");
} else if (grade >= 60) {
    console.log("Grade is C");
} else if (grade >= 50) {
    console.log("Grade is D");
} else {
    console.log("Grade is F");
}