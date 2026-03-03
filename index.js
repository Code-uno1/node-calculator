const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hello welcome to my calculator!")

rl.question(`What's you name?`, name => {
  console.log(`Hi ${name}!`);
});

rl.questionMath(`What addition would you like to perfom; add(addition)\nsub(subtraction)\nmult(multiplication)\ndiv(division)`);

rl.number1(`What's the first number`);
rl.number2(`What's the second number`);


if (questionMath.toLowerCase() == 'add') {
  const answer = number1 + number2;
  console.log(answer);
} else if (questionMath.toLowerCase() == 'sub') {
  const answer = number1 - number2;
  console.log(answer);
} else if (questionMath.toLowerCase() == 'mult') {
  const answer = number1 * number2;
  console.log(answer);
} else if (questionMath.toLowerCase() == 'div') {
  if (number1 && number2 <1 ) {
    console.log("The numbers must be greater than 1!")
  }
  const answer = number1 / number2;
  console.log(answer)
} else {
  console.log("Invalid input");
}

