console.log("Cohort De09");

let b = 5;
let c = 2;

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
