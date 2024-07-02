// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!1-Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

console.log(str2 + str3, typeof (str2 + str3));

//!2- constructor ile tanımlanan String non-primitive (ilkel olmayan)

const str4 = new String("yeni bir String");
console.log(typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *                 IMMMUTABLE
// *=========================================================

const s1 = "Clarusway";
const s2 = "Hello";

console.log(s1.concat(s2));
console.log(s1);

const s3 = s1.concat(s2);
console.log(s3);

//! orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName = "Ipek Bilir";

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));

const esitMi = (a, b) =>
  a == b.toLocaleUpperCase("tr") ? "esittir" : "esit degildir";

console.log(esitMi("İSMET", "ismet"));

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

// *=========================================================
// *                        charAt()
// *=========================================================

const s4 = "primitive \nveri tiplerinin \nproperty ya \n da methodu olmaz.";

console.log(s4);
console.log(`primitive 
veri tiplerinin 
property ya  da 
methodu olmaz.`);

console.log(s4.charAt(5));
console.log(s4.charAt(12));
console.log(s4.charAt(s4.length - 1));

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime = "to be or not to be, that is The questions.";
const kelime2 = "to be or4 not to be, that is The questions.";

console.log(kelime.includes("to be")); // true
console.log(kelime.includes("TO BE")); // true
console.log(kelime.toUpperCase().includes("TO BE")); // true

console.log(kelime.includes("")); // true
console.log(kelime.includes("to be", 14)); // false

console.log(kelime2.includes(4) ? "evet rakam var" : "rakam yok"); // true

// *=========================================================
// *                  search()  (REGEX)
// *=========================================================

const kelime3 = "to, be or not to be, 5 that is The questions.";

console.log(kelime3.search(/[A-Z]/)); // INDEX DÖNDÜRÜR 31
console.log(kelime3.search(/[a-z]/)); //
console.log(kelime3.search(/[0-9]/)); //
console.log(kelime3.search(/[0-9a-zA-Z]/)); // ilk buldugu kücük harf o yüzden 0 döndürdü.
console.log(kelime3.search(/[^0-9a-zA-Z]/)); // 2

// cümledeki büyük harfi bul onu kücült.

console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLowerCase());

//* ----------------------------------------------------------
//*       startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const cumle = "Salina salina  sinsice olurum sana!";

console.log(cumle.startsWith("sa")); // false
console.log(cumle.startsWith("Sa")); // true
console.log(cumle.endsWith("!")); // true
console.log(cumle.startsWith("sa", 7)); // true 7 index itibariyle sa ile baslar

console.log(cumle.endsWith("salina", 13)); // 13 dahil degil 13. indexe kadar olan kisim salina ile bitiyor.

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

console.log(oku.replace("saf olma", "akilli ol"));

//oku = oku.replace("saf olma", "akilli ol");
//console.log(oku);

// ? replaceAll

console.log(oku.replaceAll("saf olma", "zeki ol"));

//* 2.yol
console.log(oku.replace(/saf olma/gi, "zengin ol"));

console.log(oku.replace(/SAf/i, "fakir"));
console.log(oku.replace(/saf/g, "fakir"));

//g=global. tüm denk gelenleri değiştir
// /SAF/i;  (i=incase sensitive) yazımı büyük küçük harfe duyarsız ara demek

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel = "UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10)); // BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE"

console.log(veysel.substring(10, 21)); // BIR YOLDAYI

console.log(veysel.slice(-10)); // UNDUZ GECE
console.log(veysel.slice(-10, -6)); // UNDU

//! substring de - index calismaz

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
//* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım";

console.log(tarkan.split()); // tel elemanli bir diziye cevirir

console.log(tarkan.split(" ")); // bosluklardan ayirarak dizi olusturur

console.log(tarkan.split("e")); // e leri sil , e lerden ayirarak dizi olusturur

console.log(tarkan.split("")); // hicliklerden ayirarak tüm harflari ayri eleman yapti

console.log(tarkan.split("e", 3)); // oliusan dizinin ilk 3 elamanini getir

//* ----------------------------------------------------------
//*                       trim();
//* ----------------------------------------------------------

const ramazan = "     Hos geldin ya Sehr i Ramazan      ";

console.log(ramazan);
console.log(ramazan.trim());
console.log(ramazan.trim().endsWith("n"));

//* chaning

let abc = "                   Clarusway Full Stack";

abc = abc.trim().slice(0, 9).toUpperCase();
console.log(abc);
