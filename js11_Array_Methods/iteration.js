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
