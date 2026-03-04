const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hello welcome to the Calculator")

rl.question(
  "Choose operation (add, sub, mult, div): ",
  (operation) => {

    // Step 2: Ask first number 
    rl.question("Enter first number: ", (num1) => {

      // Step 3: Ask second number 
      rl.question("Enter second number: ", (num2) => {

        // Convert strings to numbers 
        const number1 = Number(num1);
        const number2 = Number(num2);

        let result;

        // Step 4: Perform operation 
        if (operation.toLowerCase() === "add") {
          result = number1 + number2;
        } else if (operation.toLowerCase() === "sub") {
          result = number1 - number2;
        } else if (operation.toLowerCase() === "mult") {
          result = number1 * number2;
        } else if (operation.toLowerCase() === "div") {

          if (number2 === 0) {
            console.log("Cannot divide by zero.");
            rl.close();
            return;
          }

          result = number1 / number2;

        } else {
          console.log("Invalid operation.");
          rl.close();
          return;
        }

        console.log("Result:", result);

        rl.close(); // Always close interface 
      });
    });
  }
);












































