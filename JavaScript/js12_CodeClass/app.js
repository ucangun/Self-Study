// ! DIZI METODLARI

/* 
pop(): dizinin sol elemanini SVGFilterElement.
shift(): dizinin basindaki elamani siler.
push() : dizinin sonuna eleman ekler. 
unhisft() : dizinin basina eleman ekler. 
reverse() : diziyi tersine cevirir.     
splice():(baslangic indexi, kac eleman alinacak , eklenecek elemanlar) // 3 Parametre .

sort(): dizinin elemanlarini siralar. (stringlerde ifadelerde ascii kodlara göre alfabetik siralama. 
sort((a,b) => a-b)

includes(deger): deger dizi icerisinde var mi ? Boolean Cevap 
indexOf(deger): degerin kacinci indexte oldugunu gösteriyordu.
join(""): bir dizideki elamanlari birlestirerek stringe cevirir. 
slice(): elemanlari kesmeye yarar bir parcaya almamizi saglar. 

concat():iki diziyi birlestirir. 
every(): sarti kontrol eder hepsi saglarse True döndürür. 
some(): sarti kontrol eder biri dogruysa True döndürür.
*/

// ! Call-Back
/*
const fnk = () => {
  () => {};
};

const numbers = [45, 16, 34, 23];

numbers.every((num) => num > 18); // False
numbers.some((num) => num < 18); // True
*/

//******************************************/
// map: bir dizi icin bir callback fonksiyon calistirir. ve de her eleman icin o fonksiyondan cikan sonucu bir diziye aktarir.
// forEach: bir dizi icin callback fonk calistirir . Geriye sonuc döndürmez.
// filter: bir dizi icin bir callback fonk calistirir. Verilen kosulu saglayan bir deger döndürür.

// reduce: dizideki elemanlari toplayarak tek bir degere döndürür.
//******************************************/

//! 1.Bir dizideki elemanlarin ortalamasini bulan program.

const numbers = [34, 56, 56, 87, 90];

const sum = numbers.reduce((a, b) => a + b);
const result = sum / numbers.length;
console.log(result);

//! 2.Girilen bir cümledeki kelime sayısını bulan fonksiyon

sentence = "Merhaba Cohort DE-09";

const countWords = function (x) {
  console.log(x.split(" ").length);
  // Birden fazla bosluk iceriyorsa
  console.log(x.split(/\s+/).length);
};
countWords(sentence);

//! 3.Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:

//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

const x = "Clarusway merhabe nasilsin hello";
const q = "I like Clarusway";
const a = "I like bootcamps ";

const findClarusway = function (x) {
  const arr = x.split(" ");
  return x.includes("Clarusway")
    ? console.log(`I found Clarusway at ${arr.indexOf("Clarusway") + 1}`)
    : console.log(`I can't find Clarusway :(`);
};

findClarusway(x);
findClarusway(q);
findClarusway(a);

//! 4. Bir oge dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

const arr = ["elma", "armut", "kayisi", "elma", "fener", "umut", "alex"];
const newArr = [];

const findSame = function (x) {
  for (let item of arr) {
    if (newArr.includes(item)) continue;
    else newArr.push(item);
  }
  console.log(newArr);
};

findSame(arr);

//! 5.Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon

const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];
const newWords = [];

const firstLetterA = function (x) {
  for (let item of words) {
    item[0] === "A" && newWords.push(item);
  }
  console.log(newWords);
};

firstLetterA(words);

//! 6. Bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

const kisi = salaries.map((a) => a * 1.1).filter((a) => a < 20000).length;
console.log(kisi);

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

const newSal = salaries.map((a) => a * 1.1).filter((a) => a < 20000);
const patron = newSal.map((a) => 20000 - a).reduce((a, b) => a + b);
console.log(Math.trunc(patron));
