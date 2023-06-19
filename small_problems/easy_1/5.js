const readlineSync = require("readline-sync");

const totalAmount = readlineSync.question("What is the bill? ");
const tipPercentage = readlineSync.question("What is the tip percentage? ");

const tip = (parseFloat(totalAmount) * parseFloat(tipPercentage)) / 100;
const totalWithTip = parseFloat(totalAmount) + tip;

console.log(`The tip is ${"$" + tip.toFixed(2)}`);
console.log(`The total bill with tip is ${"$" + totalWithTip.toFixed(2)}`);


/*
LS Solution
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
*/