const readline = require('readline-sync');
const fs = require('fs');

const fileContent = fs.readFileSync('mortgage_messages.json', 'utf8');
const messages = JSON.parse(fileContent);

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages.welcome);

while (true) {
  prompt(messages.loan);
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt(messages.validNumber);
    loanAmount = readline.question();
  }

  prompt(messages.term);
  let termInYears = readline.question();
  while (invalidNumber(termInYears)) {
    prompt(messages.validNumber);
    termInYears = readline.question();
  }
  const termInMonths = parseInt(termInYears, 10) * 12;

  prompt(messages.interestRate);
  let annualInterestRate = readline.question();
  while (invalidNumber(annualInterestRate)) {
    prompt(messages.validNumber);
    annualInterestRate = readline.question();
  }
  const annualInterestRateDecimal = parseFloat(annualInterestRate) / 100;
  const monthlyInterestRate = annualInterestRateDecimal / 12;

  const monthlyPayments = (loanAmount
      * monthlyInterestRate
      * (1 + monthlyInterestRate) ** termInMonths)
    / ((1 + monthlyInterestRate) ** termInMonths - 1);

  prompt(monthlyPayments.toFixed(2));

  prompt(messages.performAnotherCalculation);
  const answer = readline.question();
  console.clear();
  if (answer.toLowerCase() !== 'y') {
    break;
  }
}
