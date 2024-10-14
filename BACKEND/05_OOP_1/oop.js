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

console.log(Car.detailFunction().brand);
console.log(Car.detailFunction());

// console.log(Car.arrowMethod());  // anlamsiz
