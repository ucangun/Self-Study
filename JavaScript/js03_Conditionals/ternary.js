//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

// condition ?  (şart olduğunda yapılacaklar)  : (şart doğru olmadığında yapılacaklar)
/*
// ! CHALLENGE 1
const age = 12;
const gender = "boy";
const health = true;

const mesaj =
  age >= 20 && gender == "boy" && health
    ? "Askerlik yapalir"
    : `${20 - age} yiliniz daha var `;

console.log(mesaj);

//*
age >= 20 && gender == "erkek" && health == true
  ? console.log("ok")
  : console.log("no");
*/
/*
// !CHALLENGE 2

// kullanıcıdan not isteyelim 50 ve üstüyse başarılı, altıysa başarısız olsun
const note = +prompt("Lütfen bir notunuzu giriniz");

note >= 50 ? console.log("SUCCEED") : console.log("FAILED");

// //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.

note >= 50 ? console.log("SUCCEED") : "";

note >= 50 && console.log("SUCCEED");
*/
// !CHALLENGE 3

// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir. daha coklu sorgularda if-else daha mantiklidir.

const speed = 150;
speed > 120
  ? console.log("Speedy")
  : speed >= 90
  ? console.log("Normal")
  : console.log("Low Speed");

// //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal")
// } else {
//   console.log("Low Speed")
// }
