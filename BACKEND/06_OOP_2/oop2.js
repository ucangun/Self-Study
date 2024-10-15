"use strict";

/*
    OOP Classes
*/

//? Class Expressions

/*
const PascalCaseName  = class {

}
*/

//? Class Decleration (tercih edecegimiz)
/*
class PascalCaseName {
  //propertyName // undefined deger vermek zorunda degiliz
  propertyName = "value";
  // method basina function yazilmaz
  methodName() {
    return "this is a method";
  }
}

// classtan nir obje üretirseniz ismi "instance"

/*
const NewInstance = new PascalCaseName(); // yeni instance üretme
console.log(NewInstance);
console.log(NewInstance.methodName());
*/

//* CONSTRUCTOR
/*
class Car {
  isRunning = false;
  constructor(brand, model, year = 2005) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    return this.isRunning;
  }
}
  */

/*
const Opel = new Car("Opel", "Corsa", "2020");
console.log(Opel);
console.log(Opel.runEngine());
console.log(Opel.isRunning);

const Mercedes = new Car("Mercedes", "E200", "2023");
console.log(Mercedes);
console.log(Mercedes.runEngine());
console.log(Mercedes.isRunning);
*/

// ? INHERITANCE = Miras Alma

// Baska bir sahip olduklari her seyi alir + kendi sahip olduklari
/*
class Vehicle {
  isActive = false;
  seatCount = 5;
  hp;
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
}

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year = 2005, vehicleType) {
    super(vehicleType); // Üst sınıfın yapıcısını çağırıyoruz ve 'vehicleType' olarak 'car' belirliyoruz
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    return this.isRunning;
  }
}

const Bmw = new Car("BMW", "E30", 2024, "Car");
console.log(Bmw);
*/
/*
class Truck extends Vehicle {
  isRunning = false;
  maxCa;
  constructor(brand, model, year = 2005, vehicleType) {
    super(vehicleType); // Üst sınıfın yapıcısını çağırıyoruz ve 'vehicleType' olarak 'car' belirliyoruz
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    return this.isRunning;
  }
}
*/
/*
class Accessory extends Car {
  constructor(accessoryName, brand, model, year, vehicleType) {
    super(brand, model, year, vehicleType);
    this.accessoryName = accessoryName;
  }
}

const Seat = new Accessory("Leather", "Mercedes", "s200", 2024, "Car");
console.log(Seat);
*/

// ? POLYMORPHISIM

//Override
//Overload   js desteklemez

class Vehicle {
  isActive = false;
  seatCount = 5;
  hp;
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
  getDetail() {
    console.log("this detail about vehicle");
  }
}

const newVehicle = new Vehicle("Bus");
console.log(newVehicle.getDetail());

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year = 2005, vehicleType) {
    super(vehicleType); // Üst sınıfın yapıcısını çağırıyoruz ve 'vehicleType' olarak 'car' belirliyoruz
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  runEngine() {
    this.isRunning = true;
    return this.isRunning;
  }
  // Overload
  getDetail() {
    // parent classtaki fonksiyon override edildi.
    console.log("this detail about car");
  }
  getDetail(x) {
    // parent classtaki fonksiyon override edildi.
    console.log(x);
  }
}

const Bmw = new Car("BMW", "E30", 2024, "Car");
console.log(Bmw.getDetail());
console.log(Bmw.getDetail("test"));
