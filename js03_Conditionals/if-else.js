// * =======================================================
// *                   CONDITIONALS
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız
/*
const sayi1 = +prompt("Lütfen 1. sayiyi giriniz");
const islem = prompt("+ , - , * , / islemlerinden birini giriniz.");
const sayi2 = +prompt("Lütfen 2. sayiyi giriniz");
*/
let sonuc;

/*
if (islem == "+") {
  sonuc = sayi1 + sayi2;
} else if (islem == "-") {
  sonuc = sayi1 - sayi2;
} else if (islem == "*") {
  sonuc = sayi1 * sayi2;
} else if (islem == "/") {
  if (sayi2 != 0) {
    sonuc = sayi1 / sayi2;
  } else {
    alert("Payda 0 olamaz");
  }
} else {
  alert("Gercerli bir islem girmediniz");
}

console.log(sonuc);
*/
//************/

if (sonuc != 0) {
  // sonuc 0 disinda herhangi bir degerken
  console.log("Tebrikler bir deger elde ettiniz");
}

// ? 1.KISAYOL

if (sonuc) {
  console.log("Tebrikler bir deger elde ettiniz");
}

// ?  2.KISAYOL (short circuit)

sonuc && console.log("Tebrikler bir deger elde ettiniz");

console.log("*****************");

const age = 12;
const gender = "boy";
const health = true;

if (age >= 20 && gender == "boy" && health) {
  console.log("Askerlik yapalirisiniz");
} else {
  console.log(`${20 - age} yiliniz var`);
}
