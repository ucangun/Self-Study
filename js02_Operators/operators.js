// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola = 50;
const cips = 30;
const dondurma = 20;

console.log(kola + cips + dondurma);

let toplam = kola + cips + dondurma;
console.log(toplam);

// ! bir arttir

// toplam++;
toplam = toplam + 1;
console.log(toplam);

// ! 10 arttir

toplam = toplam + 10;
toplam += 10; // toplam = toplam + 10;
console.log(toplam);

// ! BACKTICKS ( template literals)
const ad = "erkan";
const soyad = "sevim";

console.log(ad + soyad);
console.log("adim soyadim" + " " + ad + " " + soyad);

console.log(`merhaba benim adim ${ad}, soyadim ise ${soyad}`);

//? + operatörü string concatination islemi de yapar
const sayi1 = "3";
const sayi2 = 8;

console.log(sayi1 + sayi2);
console.log(sayi1 - sayi2);

const dogumTarihi = 1979;

console.log(`${ad} ${soyad} ${2024 - dogumTarihi} yasindadir`);

//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.
