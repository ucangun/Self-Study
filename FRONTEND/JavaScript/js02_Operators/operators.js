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

// toFixed // * virgülden sonra x adet basamak birak
const ab = 1.3;
console.log(Math.trunc(ab));
console.log(Math.floor(ab));
console.log(Math.ceil(ab));
console.log(Math.round(ab));
console.log("*************");

const ba = -1.3;
console.log(Math.trunc(ba));
console.log(Math.floor(ba));
console.log(Math.ceil(ba));
console.log(Math.round(ba));

// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.log(Math.random());
console.log(Math.ceil(Math.random() * 20));

const randomNumber = Math.random();
console.log(randomNumber);
console.log(randomNumber.toFixed(2));

console.log(Math.random().toFixed(4));

//* ARTTIRMA AZALTMA

let a = 5;
console.log("ilk", a++);
console.log("ikinci", a);

let b = a++;
console.log(b); // 6
console.log(a); // 7

let c = 10;
console.log("ilk", ++c); // 11

let d = ++c;
console.log(d); // 12
console.log(c); // 12

let e = 33;
console.log(--e); // 32
console.log(e--); // 32
console.log(e); // 31

// ! e yi 5 arttir
// e=e+5

console.log((e += 5)); //36

//! e yi 5 ile carp

console.log((e *= 5)); // 180

// ? CARPMA VE US ALMA

const PI = 3.14;
const r = 5;

const alan = PI * r ** 2;
console.log(alan);

//! Math pow (power) bir sayının kuvvetini almak için kullanılır

console.log(PI * Math.pow(r, 2));

//!

console.log(Math.sqrt(144));
console.log(144 ** (1 / 2));

//* MOD ALMA  */

const number = 456;

//console.log((number = number + i2));
// console.log(number -= i2)
// console.log(number *= i2)
// console.log(number /= i2)
// console.log(number %= i2)

console.log("birler", number % 10); //6

console.log("onlar", Math.trunc(number / 10) % 10);

console.log("yüzler", Math.trunc(number / 100));

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi4 = 4;
console.log(sayi4 == 4);
console.log(sayi4 === 4);
console.log(sayi4 == "4");
console.log(sayi4 === "4"); //false

console.log(sayi4 != 5); // true 5 e esit degil mi ?
console.log(sayi4 != "4"); // false

console.log(sayi4 > 4);
console.log(sayi4 >= 4);

// * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

// ? TRUE
console.log("*************");
console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1, 2, 5]));

// ? FALSY

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// !
const v1 = false || 0 || 12.6 || false || null;
console.log(v1);
console.log(Boolean(v1));

const v2 = false || 0 || null || undefined || NaN;
console.log(v2);
console.log(Boolean(v2));

//!
const v3 = 5 && true && 0 && "";
console.log(v3);
console.log(Boolean(v3));

const v4 = 5 && 12.6 && -7 && true && 4;
console.log(v4);
console.log(Boolean(v4));
console.log(!v4);

// * =======================================================
// *               TYPE CONVERSION
// * =======================================================

const para = Number("1000") + Number("900");
console.log(para);

let aa = 10;
let bb = "5";

console.log("Toplama", aa + bb); //105
console.log("Çıkarma", aa - bb); // 5
console.log("Çarpma", aa * bb); // 50
console.log("Bölme", aa / bb); //2

console.log(aa + Number(bb)); //15

console.log(typeof bb);

console.log(bb ** 2); // 25

let ee = "123.45";
//************/
console.log(parseInt(ee)); // tam kismi akir number yapar
console.log(parseFloat(ee));
//************/

// //* .toString() Metodu numberları stringe çevirir

let f = 123.45;
console.log(String(f));
console.log(f.toString());

//* + ile de Numbera cevirebiliriz

console.log(+ee);

let i = +ee;
console.log(typeof i);
console.log(typeof ee);

//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir
//* Sayıyı stringe çevirir

let z = 0.345675678;
console.log(typeof z.toFixed(2));
console.log(typeof +z.toFixed(2));

//* prompt komutu da toFixed gibi kullanılan sayıyı string yapar.

/*
const age = prompt("Lütfen yasinizi giriniz");
console.log(typeof age); // String

const age2 = +prompt("Lütfen yasinizi giriniz");
console.log(typeof age2); // number
*/

/* ---------------------------------- */
/*         //*   GENERAL              */
/* ---------------------------------- */

console.log(typeof null);

let n = null;
console.log(Boolean(n));

console.log(null - 5);
console.log(null + 5);

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(Number("asdf"));
console.log(Number("1234"));

console.log(null === null);

//!GENEL KÜLTÜR

console.log(Number("0x11")); // x=hexa 16 lık taban 17

console.log(Number("0b101")); // b=binary 2 lik taban 5

console.log(Number("0o11")); // o=octal 8 lik taban 9
