const readlineSync = require("readline-sync");

console.log("Enter the length of the room in meters: ");
const length = readlineSync.prompt();
console.log("Enter the width of the room in meters:");
const width = readlineSync.prompt();

function calculateSquareMeters(l, w) {
  const r = l * w;
  console.log(
    `The area of the room is ${r} square meters (${(r * 10.764).toFixed(
      2
    )} square feet).`
  );
}

calculateSquareMeters(length, width);


/*
LS Solution
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);
*/