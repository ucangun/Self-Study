"use strict";

/*
    OOP
*/

// * Obje isimlendirmede pascalCase / camelCase

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

// Obje property cagirma
console.log(sampleObject.propertyName);
console.log(sampleObject.methodName());

// example object

const Car = {
  brand: "Mercedes",
  model: "s500",
  year: 2020,
  isAutoGear: true,
  colors: ["black", "blue"],
  startEngine: function () {
    return "engine started";
  },
};

console.log(Car.brand);
console.log(Car.startEngine());
