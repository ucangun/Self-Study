// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// * ÖRNEK 1 ÖNCE FONKSIYON OLUSTURMAK SART

/*
const isEvenOdd = function (x) {
  return x % 2 === 0 ? "CIFT" : "TEK";
};
console.log(isEvenOdd(5));

*/

// * ÖRNEK 2 verilen 3  sayidan en büyügünü bul

/*
const maxValue = function (a, b, c) {
  biggest = a;
  if (b > a) {
    biggest = b;
  } else if (c > b) {
    biggest = c;
  } else {
    biggest;
  }
  return biggest;
};

console.log(maxValue(5, 10, 15));
*/

/*
const buyukBul = function (a, b, c) {
  let enBuyuk;
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;
  return enBuyuk;
};
console.log(buyukBul(3, 4, 5));
console.log(buyukBul(13, 4, 7));
*/

// * ÖRNEK 3 arguments keywordü ile

/*
const enBul = function () {
  let maxValue = arguments[0];
  let minValue = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > maxValue) {
      maxValue = arguments[i];
    }
    if (arguments[i] < minValue) {
      minValue = arguments[i];
    }
  }
  return `${maxValue} ${minValue}`;
};

console.log(enBul(34, 111, 777, 678, 56, 2, 5678, 34, 6));
*/

// * ÖRNEK 4

/*
const usAl = function (a, b) {
  return a ** b;
};

const cevreBul = function (a, b) {
  return (a + b) * 2;
};

const alanBul = function (a, b) {
  return a * b;
};

const hesapla = function (secim, s1, s2) {
  if (secim == "usAlirmisin") {
    console.log(usAl(s1, s2));
  } else if (secim == "cevreBulurmusun") {
    console.log(cevreBul(s1, s2));
  } else if (secim == "alanBulurmusun") {
    console.log(alanBul(s1, s2));
  }
};

hesapla("usAlirmisin", 3, 5);
hesapla("cevreBulurmusun", 13, 15);
hesapla("alanBulurmusun", 2, 5);
*/

// * ÖRNEK 5

//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre,
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/

/*
const calculate = function (birthYear) {
  const ortOmur = 95;
  const kalanOmur = ortOmur - (2024 - birthYear);

  if (kalanOmur > 0 && kalanOmur <= 10) {
    return "Sen bu değerleri önemseme hayatın tadını çıkar";
  } else if (kalanOmur > 10 && kalanOmur <= 20) {
    return " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. ";
  } else {
    return ` Ortalama ${kalanOmur} yil ömrünüz kaldi , daha calis ilerde gezersin.`;
  }
};

console.log(calculate(+prompt("Lütfen dogum yilinizi giriniz")));
*/

// * ÖRNEK 6

/*
const meyveDilimle = (meyveSayisi) => meyveSayisi * 4;

const meyveSuyuHazirla = function (portakal, elma, muz) {
  const portakalsayisi = meyveDilimle(4);
  const elmasayisi = meyveDilimle(3);
  const muzsayisi = meyveDilimle(2);


};
*/
