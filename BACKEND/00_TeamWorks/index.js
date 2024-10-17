/*
console.log(0.1 + 0.2); // Output: 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // Output: false
*/
/*
console.log(1 < 2 < 3); // Output: true
console.log(3 > 2 > 1); // Output: false
*/
/*
const prompt = require("prompt-sync")();
let sum = 0;
let number = parseInt(prompt("Enter a number: "));
while (number >= 0) {
  sum += number;
  number = parseInt(prompt("Enter a number: "));
}
console.log(`The sum is ${sum}.`);
*/
/*
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
console.log(isNaN(2 + null)); // Output: false
console.log(isNaN(2 + undefined)); // Output: true
null ? console.log("true") : console.log("false"); // Output: false
*/
/*
const x = (function f(n) {
  return n > 1 ? n * f(n - 1) : n;
})(5);

console.log(x);
*/
/*
(function () {
  try {
    throw new Error();
  } catch (err) {
    var x = "error message",
      y = 2;
    console.log(err);
  }
  console.log(x);
  console.log(y);
})();
*/
/*
let a = [10, 20, 30];
a[10] = 100;
console.log(a[6]);
let b = [undefined];
b[2] = 1;
console.log(b);
console.log(b.map((e) => 99));
*/

/*
function orderPizza(type, ingredients, callback) {
  console.log("Pizza ordered...");
  console.log("Pizza is for preparation");
  setTimeout(function () {
    let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
$10`;
    callback(msg);
  }, 3000);
}
orderPizza("Vegeterian", "Cheese", function (message) {
  console.log(message);
});
*/

/*
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  detail() {
    console.log(this.id + " " + this.name);
  }
}

// Employee örnekleri
let e1 = new Employee(10, "Qadir Adamson");
let e2 = new Employee("Victor Hug");
let e3 = new Employee(12);

e1.detail();
e2.detail();
e3.detail();
*/
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sound() {
    return `${this.name} says`;
  }
}

class Cat extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }

  sound() {
    return `${super.sound()} Meow!`;
  }
}

let felix = new Cat("felix", 5);
console.log(felix.sound());
