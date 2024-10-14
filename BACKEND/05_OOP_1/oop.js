"use strict";

/*
    OOP
*/

// * Obje isimlendirmede pascalCase / camelCase

/*
const sampleObject = {
  // property / attribute / field
  propertyName: "value",
  propertyArray: [],
  propertyObject: {},

  // function = method
  methodName: function () {
    return "this is method";
  },
  // or
  methodName2() {
    return "this is method";
  },
};
*/

//* Obje property cagirma

/*
console.log(sampleObject.propertyName);
console.log(sampleObject.methodName());
*/

//* example object

/*
const Car = {
  brand: "Mercedes",
  model: "s500",
  year: 2020,
  isAutoGear: true,
  colors: ["black", "blue"],
  engine: {
    cylinderCount: 8,
    hp: 100,
  },
  startEngine: function () {
    return "engine started";
  },
  stopEngine: function () {
    return "engine stopped";
  },
};
*/

/*
//* . dot notation
console.log(Car.brand);
console.log(Car.colors[1]);
console.log(Car.startEngine());
console.log(Car.engine);
console.log(Car.engine.hp);

//* alternative
console.log(Car["brand"]);
console.log(Car["colors"][1]);
console.log(Car["stopEngine"]());
*/

//? This keyword
// icinde bulundugu objeyi ifade eder

/*
const Car = {
  brand: "Mercedes",
  model: "s500",
  year: 2020,
  isAutoGear: true,
  colors: ["black", "blue"],
  engine: {
    cylinderCount: 8,
    hp: 100,
  },
  startEngine: function () {
    return "engine started";
  },
  stopEngine: function () {
    return "engine stopped";
  },
  detailFunction: function () {
    return this;
  },
  //! arrow function global scope
  arrowMethod: () => {
    return this;
  },
};
*/

/*
console.log(Car.detailFunction().brand);
console.log(Car.detailFunction());
*/

// console.log(Car.arrowMethod());  // anlamsiz

//? Array Destructuring

/*

const sampleArray = ["val1", "val2", "val3", "val4", "val5"];

*/

/*
const v1 = sampleArray[0];
const v2 = sampleArray[1];
const v3 = sampleArray[2];
const v4 = sampleArray.slice(2, 3);
*/

// console.log(v4);

/*

// rest Operator => esitligin solunda olacak

const [v1, v2, ...vN] = sampleArray;
console.log(vN);

// spread operator => esitligin saginda olacak

const newArray = ["valx", "valy", ...sampleArray, "valz"];
console.log(newArray);
*/

//? Object Destructuring

const Car = {
  brand: "Mercedes",
  model: "s500",
  year: 2020,
  isAutoGear: true,
  colors: ["black", "blue"],
  engine: {
    cylinderCount: 8,
    hp: 100,
  },
  startEngine: function () {
    return "engine started";
  },
  stopEngine: function () {
    return "engine stopped";
  },
  detailFunction: function () {
    return this;
  },
  //! arrow function global scope
  arrowMethod: () => {
    return this;
  },
};

// rest
/*
const { year, brand, model, ...others } = Car;
console.log(year, brand, model, others);

console.log("*****************************");

console.log(Car);


const { year, brand: marka, model, ...others } = Car;
console.log(year, marka, model, others);
*/

// Spread

/*

const newCar = {
  ...Car,
  newKey: "value",
};

console.log(newCar);

*/

// Obj to Json

/*
const jsonCar = JSON.stringify(Car);
console.log(jsonCar);
console.log(typeof jsonCar);
console.log(typeof Car);
*/

// Json to Obj

/*
const objCar = JSON.parse(jsonCar);
console.log(objCar);
*/

// Object to array

/*
const arrayCar = Object.keys(Car);
console.log(arrayCar);

const arrayCar2 = Object.values(Car);
console.log(arrayCar2);

const arrayCar3 = Object.entries(Car);
console.log(arrayCar3);
*/

// Construction

const constructionFunction = function () {
  this.property = "value";
};

const carConstruction = function (brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.startEngine = function (param) {
    return `${param} started`;
  };
};

const newCar1 = new carConstruction("Volkswagen", "Passat", "2024");

console.log(newCar1.startEngine("key"));
console.log(typeof newCar1, newCar1);

const newCar2 = new carConstruction("Audi", "A4", "2024");
console.log(newCar2.startEngine("key"));
console.log(typeof newCar2, newCar2);
//console.log(typeof carConstruction);  // function
