/*
let isimler = ["harvey", "ashley", "tolga", "fatih", "gokce"];
let bos = [];

console.log(typeof isimler);
console.log(typeof isimler[0]);
console.log(isimler.length);

console.log(Boolean(bos));
console.log(Boolean(bos.length));

bos.length ? console.log("Veri geliyor") : console.log("Veri gelmiyor");

//*  for , while , do while

for (let i = 0; i < isimler.length; i++) {
  console.log(isimler[i]);
}

let sayac = 0;
while (sayac < isimler.length) {
  console.log(isimler[sayac]);
  sayac++;
}

isimler.forEach((isim) => console.log(isim));
*/

//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

let hello = "hello world";

function findVowels(str) {
  let vowels = "aeiouAEIOU";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(findVowels(hello));

//*************** */

/*  Olmadi 
const kelime = "Hello World";
const sesli = [];

for (let i = 0; i < kelime.length; i++) {
  if (kelime.search(/[aeiouAEIOU]/)) {
    sesli.push(i);
  }
}
console.log(sesli);
*/

//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.

function maxValue(arr) {
  let biggest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}

let sayi = [1, 2, 300, 40, 5, 6, 8];
console.log(maxValue(sayi));

//***/

let sayis = [1, 2, 300, 40, 5, 6, 8];
sayis.sort((a, b) => a - b);
console.log(sayis[sayis.length - 1]);

//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let sayilar = [10, 20, 40, 40, 50];
console.log(sumArray(sayilar));

//! 4- Bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

function ortArray(arr) {
  let sum = 0;
  let ort;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  ort = sum / arr.length;
  return ort;
}

let numbers = [10, 20, 40, 40, 50];
console.log(ortArray(numbers));

//! 5 -Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

let cumle = "Hello World Merhaba";
const newCumle = cumle.split(" ");
console.log(newCumle);
console.log(newCumle.length);

//****/

function countWords(sentence) {
  const words = sentence.split(" ");
  return words.length;
}
console.log(countWords(cumle));

//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

let sentence = "Javascript harika bir dil";

function tersCevir(sentence) {
  let newSentence = "";
  let splitSentence = sentence.split(" ");
  for (let i = splitSentence.length - 1; i >= 0; i--) {
    newSentence += splitSentence[i] + " ";
  }
  return newSentence;
}

console.log(tersCevir(sentence));

//****/

//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.
/*
const isimler = [];

let isim;
while ((isim = prompt("Lütfen bir isim giriniz")) !== "q") {
  if (isim == "q") {
    isimler.pop(isim);
  }
  isimler.push(isim);
}
console.log(isimler);
*/

/*
let names = [];
while (true) {
  let name = prompt('Bir ad girin veya çikmak için "q" yazin:');
  if (name === "q") {
    names.pop();
    break;
  }
  names.push(name);
}

console.log(names);
*/

//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

function calcAge(userName, birthYear) {
  let age = new Date().getFullYear() - birthYear;
  return `${userName}, ${age} yasindadir`;
}
console.log(calcAge("Umut", 1998));

const calcAge1 = (userName, birthYear) => {
  let age = new Date().getFullYear() - birthYear;
  return `${userName}, ${age} yasindadir`;
};
console.log(calcAge1("Ali", 1985));

/*
let yourName = prompt("what is your name");
let birthYear = prompt("when you born");

function ageCalc(name, age) {
  let yas = new Date().getFullYear() - age;
  return console.log(`${name} ${yas} yasinda`);
}

ageCalc(yourName, birthYear);
*/
//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

const isimler1 = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const newa = [];

for (let i = 0; i < isimler1.length; i++) {
  const element = isimler1[i].toLowerCase();
  newa.push(element);
}

console.log(newa);

//! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

function faktoriyel(number) {
  let fak = 1;
  for (let i = number; i > 1; i--) {
    fak *= i;
  }
  return fak;
}

console.log(faktoriyel(8));

//! 11- kayıp sayıyı bulun?
const sal = [5, 2, 6, 1, 3, 7];

sal.sort((a, b) => a - b);

let kayipSayi;

for (let i = 0; i < sal.length - 1; i++) {
  if (sal[i + 1] - sal[i] !== 1) {
    kayipSayi = sal[i] + 1;
    break;
  }
}

console.log("Kayıp sayı:", kayipSayi);
