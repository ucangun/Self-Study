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
var usernames = ["Umut", "Can"];
usernames.push("ayse");
usernames.push(1907); // Argument of type 'number' is not assignable to parameter of type 'string'.
var surnames = [];
surnames.push("Kara");
surnames.push(5); //  Argument of type 'number' is not assignable to parameter of type 'string'.
surnames.push("25");
// type decleration 2.yol
var nums2 = [5, 6];
console.log(surnames);
