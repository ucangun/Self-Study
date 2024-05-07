// ! CHALLENGE 1
/*
const score = +prompt("Please enter your score ");

let grade;
if (score >= 0 && score <= 25) {
  grade = "FF";
} else if (score >= 26 && score <= 45) {
  grade = "DD";
} else if (score >= 46 && score <= 65) {
  grade = "CC";
} else if (score >= 66 && score <= 75) {
  grade = "BB";
} else if (score >= 76 && score <= 90) {
  grade = "BA";
} else if (score >= 91 && score <= 100) {
  grade = "AA";
} else {
  alert("Please enter a valid value");
}

console.log(grade);
*/

// ! CHALLENGE 2
/*
let month = prompt("Please enter a month");
let order;

switch (month) {
  case "january":
    order = 1;
    break;
  case "february":
    order = 2;
    break;
  case "march":
    order = 3;
    break;
  case "april":
    order = 4;
    break;
  case "may":
    order = 5;
    break;
  case "june":
    order = 6;
    break;
  case "july":
    order = 7;
    break;
  case "august":
    order = 8;
    break;
  case "september":
    order = 9;
    break;
  case "october":
    order = 10;
    break;
  case "november":
    order = 11;
    break;
  case "december":
    order = 12;
    break;

  default:
    alert("Please enter a valid value");
    break;
}

console.log(order);
*/

// ! CHALLENGE 3

/*
let n1 = +prompt("Please enter a number");
let n2 = +prompt("Please enter a number");
let n3 = +prompt("Please enter a number");

let sum = n1 + n2 + n3;
console.log(`${n1} + ${n2} + ${n3} = ${sum}`);

let mult = n1 * n2 * n3;
console.log(`${n1} * ${n2} * ${n3} = ${mult}`);

let biggest = n1;
if (n2 > biggest) {
  biggest = n2;
}
if (n3 > biggest) {
  biggest = n3;
}
console.log(`${biggest} is the biggest`);

let smallest = n1;
if (n2 < smallest) {
  biggest = n2;
}
if (n3 < smallest) {
  biggest = n3;
}
console.log(`${smallest} is the smallest`);
*/

// ! CHALLENGE 4

/*
const number = +prompt("Please enter a number");

number % 2 == 0 ? console.log("CIFT") : console.log("TEK");
*/

// ! CHALLENGE 5

let unit = prompt("Pleasse enter a value and unit, which you want to convert");
let value = +prompt("Pleasse enter a value ");
let result;

if (unit == "C") {
  result = (value - 32) / 1.8;
  console.log(`${value} F is ${result} C`);
} else if (unit == "F") {
  result = value * 1.8 + 32;
  console.log(`${value} C is ${result} F`);
} else {
  alert("Please enter a valid value");
}
