const readlineSync = require("readline-sync");
const integer = readlineSync.question(
  "Please enter an integer greater than 0: "
);
const operation = readlineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

if (operation.toLowerCase() === "s") {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log(`The sum of the integers from 1 to ${integer} is ${sum}.`);
} else if (operation.toLowerCase() === "p") {
  let sum = 1;
  for (let i = 1; i <= integer; i++) {
    sum *= i;
  }
  console.log(
    `The product of the integers between 1 and ${integer} is ${sum}.`
  );
}

/*
LS Solution
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
*/