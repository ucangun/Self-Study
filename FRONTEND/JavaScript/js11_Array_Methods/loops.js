//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

const dizi1 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatif1 = [];
const pozitif1 = [];

const dizilereAyir1 = () => {
  for (let i = 0; i < dizi1.length; i++) {
    if (dizi1[i] < 0) {
      negatif1.push(dizi1[i]);
    } else {
      pozitif1.push(dizi1[i]);
    }
  }

  console.log(pozitif1);
  console.log(negatif1);
};

dizilereAyir1();

//******** FOR IN  */

const dizi2 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatif2 = [];
const pozitif2 = [];

const dizilereAyir2 = () => {
  for (let i in dizi2) {
    if (dizi2[i] < 0) {
      negatif2.push(dizi2[i]);
    } else {
      pozitif2.push(dizi2[i]);
    }
  }
  console.log(pozitif2);
  console.log(negatif2);
};

dizilereAyir2();

//******** FOR OF  */

const dizi3 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatif3 = [];
const pozitif3 = [];

const dizilereAyir3 = () => {
  for (let item of dizi3) {
    if (item < 0) {
      negatif3.push(item);
    } else {
      pozitif3.push(item);
    }
  }
  console.log(pozitif3);
  console.log(negatif3);
};

dizilereAyir3();

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------

const animal = [
  "fil",
  "aslan",
  "deve",
  "fil",
  "kaplan",
  "fil",
  "deve",
  "aslan",
  "aslan",
  "aslan",
];

const userAnimal = "deve";

const findAnimal = () => {
  let sayac = 0;
  for (let i in animal) {
    if (animal[i] === userAnimal) sayac++;
  }
  return `${userAnimal} hayvanindan ${sayac} adet bulunmaktadir`;
};

console.log(findAnimal());

//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes", "audi", "volvo"];

//! 1.yol

console.log(arabalar.join(" "));

//! 2.yol (for of)
let araba = "";
for (let item of arabalar) {
  araba += item + " ";
}
console.log(araba);

//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.
