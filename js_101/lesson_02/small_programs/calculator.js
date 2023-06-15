const readline = require("readline-sync");
const fs = require("fs");

const fileContent = fs.readFileSync("calculator_messages.json", "utf8");
const messages = JSON.parse(fileContent);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt(messages.welcome);

while (true) {
  prompt(messages.enterFirstNumber);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(messages.validNumber);
    number1 = readline.question();
  }

  prompt(messages.enterSecondNumber);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(messages.validNumber);
    number2 = readline.question();
  }

  prompt(messages.chooseOperation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.mustChoose);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    default:
  }

  prompt(`The result is ${output}`);

  prompt(messages.performAnotherCalculation);
  const answer = readline.question();
  if (answer.toLowerCase() !== "y") {
    break;
  }
}
