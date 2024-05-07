//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız

// switch ( değişken){

//     case durum1:
//         değişken durum1 e eşit oluğunda yapılacaklar  break
//     case durum2:
//         değişken durum2 e eşit oluğunda yapılacaklar break
//         .
//         .
//         .
//     case durumN:
//         değişken durumN e eşit oluğunda yapılacaklar  break
//     default:
//         yukarıdaki durumların hiçbiri gerçekleşmediğinde yapılacaklar
// }

/*
console.log("-------------------------------------");
console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
console.log("-------------------------------------");

const sayi1 = +prompt("Lütfen 1. sayiyi giriniz");
const islem = prompt("+ , - , * , / islemlerinden birini giriniz.");
const sayi2 = +prompt("Lütfen 2. sayiyi giriniz");

let sonuc;
switch (islem) {
  case "+":
    sonuc = sayi1 + sayi2;
    break;
  case "-":
    sonuc = sayi1 - sayi2;
    break;
  case "*":
    sonuc = sayi1 * sayi2;
    break;
  case "/":
    if (sayi2 != 0) {
      sonuc = sayi1 / sayi2;
    } else {
      alert("Payda 0 olamaz");
    }
    break;

  default:
    alert("Gecerli bir deger girmediniz");
    break;
}

console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc} `);
*/

// !CHALLENGES

/*
//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.

const asgariUcret = 17000;
const maas = +prompt("Maasinizi giriniz");

const zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas + 1.1;

console.log(zamliMaas);

//maas > 30000 ? maas * 1.1 : maas > 20000 ? maas * 1.2 : maas * 1.5;
*/
/*
//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız.

const maas = +prompt("Lütfen maasinizi giriniz");
const borc = +prompt("Lütfen borcunuzu giriniz");

const krediDrumu = maas * 10 - borc >= 5000 ? "YES" : "NO";

console.log(`${maas * 10} ${borc} ${krediDrumu}`);
*/

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

/*
const n1 = +prompt("Lütfen sayi giriniz");
const n2 = +prompt("Lütfen sayi giriniz");
const n3 = +prompt("Lütfen sayi giriniz");
*/
//? kosullarin logical operatorler yardimiyla birleştirilmesi
/*
if (n1 > n2 && n1 > n3) {
  console.log(`En Büyük ${n1}`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`En Büyük ${n2}`);
} else {
  console.log(`En Büyük ${n3}`);
}
*/

//* 2.YÖNTEM

const s1 = 3;
const s2 = 56;
const s3 = 15;

let biggest = s1;

if (s2 > biggest) {
  biggest = s2;
}
if (s3 > biggest) {
  biggest = s3;
}

console.log(biggest);
