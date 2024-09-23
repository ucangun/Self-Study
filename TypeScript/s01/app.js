console.log("Cohort De09");
var b = 5;
var c = 2;
// b = "5" //Type 'string' is not assignable to type 'number'.
/*
let e : string = 'Hello'
let f = "World!"

let g : boolean;
let h; // any atar otomatik olarak

let x,y,z: string; // tek satırda birden fazla değişkene type belirtemiyoruz, baştakileri any olarak kabul ediyor sonrakine asıl tip ataması yapıyor.
x="Merhaba"
y=5
z = "Oldu"
z = 5 // error
*/
//* Arrays
/*
let nums: number[] = [1, 2, "Hi"];

nums.push("Merhaba");
nums.push(5);
nums.push(false);

console.log(nums);

nums.forEach((item) => item.toLowerCase());
*/
/*

let usernames: string[] = ["Umut", "Can"];
usernames.push("ayse");
usernames.push(1907); // Argument of type 'number' is not assignable to parameter of type 'string'.

let surnames: string[] = [];
surnames.push("Kara");
surnames.push(5); //  Argument of type 'number' is not assignable to parameter of type 'string'.
surnames.push("25");

// type decleration 2.yol

let nums2: Array<number> = [5, 6];
console.log(surnames);
*/
//* Tuples
/*
let myTuple: [number, string, boolean] = [5, "merhaba", false];
console.log(myTuple);

let myTuple2: [number, string, boolean];
myTuple2 = [5, "merhaba"]; // eksik eleman
console.log(myTuple2);

// Tuples of Array

let myTuple3: [number, string][];
myTuple3 = [
  [5, "5"],
  [6, "6"],
];

myTuple3.push([7, "7"]);
myTuple3.push(false); // ts error

console.log(myTuple3);
*/
// ? Enum
/*
const enum Role {
  User, // User = 0
  Admin, // Admin = 1
  DbAdmin = Admin * 3,
  Tester, // Tester = 4
}

let currentUser: Role = Role.DbAdmin;
currentUser = Role.Tester;
console.log(currentUser);

enum StatusCodes {
  NotFound = 404,
  Created = 201,
  Accepted = 202,
  BadRequest = 500,
  NoContent = 204,
  Success = 200,
}

const response: StatusCodes = StatusCodes.Success;
console.log(response);

enum Sizes {
  Small = "S",
  Medium = "M",
  Large = "L",
  XLarge = 100,
  XXLarge,
}

Sizes.Medium;
Sizes["Medium"]; // "M"
Sizes[101]; // XXLarge
*/
// ? any
/*
let h: any = 1;
h = "Hello";

let k: boolean = h;
*/
// ? unknown
/*
let j: unknown = 5;
j = "5";

let m: string = j;
let n: string = j as string; // type assertions
*/
// ? void type
/*
function warnUser(): void {
  console.log("Warning");
}

function warnUser2(): void {
  console.log("Warning");
  return warn;
} // Error

let myFunction = warnUser();
console.log(myFunction);
*/
// ? never type
/*
function throwError(): never {
  throw new Error("Error");
}
*/
// ? Union Type
var id = "a";
id = 1;
id = false; // Type 'boolean' is not assignable to type 'string | number'.
var myId = 5;
myId = "5";
var model = "1996";
model = 1996;
var car1 = "BMW";
car1 = "Honda"; // Error
car1 = "Toyota"; // Error
car1 = "Mercedes"; // Ok
car1 = "Audi"; // Ok
// overloading icin en son asil fonksiyonu yazarken parametrelere any vermemiz gerekiyor. parametrelere any versek de
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
console.log(add("3", "5"));
console.log(add("3", 5));
console.log(add(3, "5")); // error
