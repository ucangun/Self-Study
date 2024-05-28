//* ======================================================
//*                   FOREACH METHOD

//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir ve siz extra bir sey istemedikce diziyi degistirmez.
//*======================================================

//* ÖRNEK 1

const prices1 = [100, 250, 50, 90];

prices1.forEach((a) => console.log(a));

console.log(prices1); // orijinal diziyi bozmadi.

let toplam = 0;
const terminal = prices1.forEach((b) => console.log((toplam += b)));

console.log(terminal); // undefined

//**************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir
//* her bir elemani 2 katiyla carp ve bütün dizi elemanlarini  topla

const prices2 = [100, 250, 50, 90];

let toplam1 = 0;

prices2.forEach((p, i, prices) => {
  toplam1 += p;
  console.log(`${i + 1}. toplam ${toplam1}`);

  prices[i] = p * 2;

  //* su sekilde diziyi kalici olarak degistirdik.
});

console.log(prices2);

//** ORNEK meyveler dizisindeki elemanlarin harf sayisi 3 ten büyük olan meyveleri büyük harfe cevir */

const meyveler = ["elma", "erik", "muz", "karpuz"];

meyveler.forEach((meyve) => {
  if (meyve.length > 3) {
    console.log(meyve.toUpperCase());
  } else {
    console.log(meyve);
  }
});

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "umut",
  "gokce",
  "mehmet",
];

const yeni = names.map((a) => a.toUpperCase());
console.log(yeni);

console.log(names);

names.map((a) => a.toUpperCase()).forEach((a) => console.log(a));
console.log(names);

//! her elemanin sadece ilk harfini büyüttük

const yeni2 = names.map((a) => a.replace(a[0], a[0].toUpperCase()));
console.log(yeni2);

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 300, 50, 90];

fiyatlar.map((p, i, arr) => {
  if (p < 250) {
    arr[i] = p * 1.5;
  } else {
    arr[i] = p * 1.2;
  }
});
console.log(fiyatlar);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz
// toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametrei kadar virgülden sonra eleman bırakır
//! toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const euroArr = [];
const dolarArr = [];
tlPrices.map((p, i, arr) => {
  euroArr.push(+(arr[i] / euro).toFixed(2));
  dolarArr.push(+(arr[i] / dolar).toFixed(2));
});

console.log(euroArr);
console.log(dolarArr);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices = [200, 500, 100, 180];

const ucuzlar = prices.filter((a) => a < 200);
console.log(ucuzlar);

prices.filter((a) => a < 200).forEach((a) => console.log(a));

console.log(prices);

prices
  .filter((a) => a < 200)
  .map((a) => a * 2)
  .forEach((a) => console.log(a));

//**** */ ornek1
const text = "Clarusway Online Career IT TraininG School ThankS for time";

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüt

text
  .split(" ")
  .map((a) => a.toUpperCase())
  .forEach((a) => console.log(a));

//!yukarıda array e döndürdüğümüz string cümledeki, T ile başlayan kelimelerin ilk harfini küçült, diğer harflerini normal bırakarak yazdır

text
  .split(" ")
  .filter((a) => a.startsWith("T"))
  .map((a) => a.replace(a[0], a[0].toLowerCase()))
  .forEach((a) => console.log(a));

//! n harfiyle biten isimleri tersten yadir ve yeni bir diziye ata

const names2 = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "umut",
  "gokce",
  "mehmet",
  "rengin",
  "erkan",
];

const newName = names2
  .filter((a) => a.endsWith("n"))
  .map((a) => a.split("").reverse().join(""));

console.log(newName);

//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

const fiyatlar2 = [100, 250, 50, 90];

//! 1.YOL map + if ile
const newArr = fiyatlar2.map((a) => {
  if (a > 100) {
    return a * 1.1;
  } else {
    return a * 1.15;
  }
});

console.log(newArr);

//! UMUT
/*
fiyatlar2.map((p, i, arr) => {
  p > 100 ? (arr[i] = p * 1.1) : (arr[i] = p * 1.15);
});

console.log(fiyatlar2);
*/

//! 3 .YOL

const zengin = fiyatlar2.filter((a) => a > 100).map((a) => a * 1.1);
const fakir = fiyatlar2.filter((a) => a <= 100).map((a) => a * 1.15);

console.log(zengin.concat(fakir));

//* ======================================================
//*             REDUCE tek bir eleman döndürür
//*            reduce(accumulator, currentValue);
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

const salaries = [3000, 5000, 4000, 6000, 7500];

// const result = salaries.reduce((toplam, eleman) => toplam + eleman,0);
//  console.log( salaries.reduce((toplam,eleman)=>toplam + eleman,0))
// alttaki kodu yukarıdaki gibi görür ve toplam değişkenine 0 ı assign eder, yazmamıza gerek yok

const result = salaries.reduce((toplam, eleman) => toplam + eleman);
console.log(result);

//! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız

console.log(salaries.reduce((acc, current) => acc * current));

//*** ÖRNEK */
// alttaki 1 den 7 ye kadar olan sayıların bulunduğu bir dizi verilmiş ancak bir eleman unutulmuş, unutulan elemanı bulunuz
const nummern = [5, 1, 4, 7, 2, 3];

let total = ((nummern.length + 1) * (nummern.length + 2)) / 2;

const sumArr = nummern.reduce((acc, curr) => acc + curr);

console.log(total - sumArr);
