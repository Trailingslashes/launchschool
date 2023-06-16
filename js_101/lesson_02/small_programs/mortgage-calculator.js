// let m = p * (r / (1 - Math.pow((1 + r), (-n))));
/*
monthly payment = 400K * (1 Math.pow((1+ 0.05/12), (-12 * 30)
Inputs:
m = monthly payment
p = loan amount (400k)
r = interest rate 0.05
n = number of payments made every single year (12 payment a year)
t = long duration - 30 years
Processing:
Prompt for loan
Prompt for term 
Prompt for interest
Outputs:
Payment Every Month
Total of payments
Total interest (Principal and Interest)
*/
const readline = require("readline-sync");
//const fs = require('fs');

//const fileContent = fs.readFileSync('calculator_messages.json', 'utf8');
//const messages = JSON.parse(fileContent);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("Welcome to the mortgage calculator!");

while (true) {
  prompt("Enter your loan amount");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt("Hmm... that doesn't look like a valid number.");
    loanAmount = readline.question();
  }

  prompt("Enter (in years) how long your term is");
  let termInYears = readline.question();
  while (invalidNumber(termInYears)) {
    prompt("Hmm... that doesn't look like a valid number.");
    termInYears = readline.question();
  }
  const termInMonths = parseInt(termInYears) * 12;

  prompt("Enter the annual interest rate (e.g., 5 for 5%):");
  let annualInterestRate = readline.question();
  while (invalidNumber(annualInterestRate)) {
    prompt("Hmm... that doesn't look like a valid number.");
    annualInterestRate = readline.question();
  }
  const annualInterestRateDecimal = parseFloat(annualInterestRate) / 100;
  const monthlyInterestRate = annualInterestRateDecimal / 12;

  const monthlyPayments =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, termInMonths)) /
    (Math.pow(1 + monthlyInterestRate, termInMonths) - 1);

  console.log(monthlyPayments.toFixed(2));
}
