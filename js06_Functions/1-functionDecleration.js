// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

// ** ÖRNEK 1
/*
// yazdir(); // invoke ya da call

function yazdir() {
  console.log("En büyük Fener");
}

yazdir();
*/

// ** ÖRNEK 2 Parametreli Fonksiyon
/*
function adYazdir(ad1, ad2, ad3) {
  console.log(ad1, ad2, ad3);
}

adYazdir("umut", "dilara", "can");
*/

// ** ÖRNEK 3 Parametreli, dönüs degerli (return) Fonksiyon
/*
function yasHesapla(isim, tarih) {
  console.log(
    `Benim adim ${isim} ve ben ${new Date().getFullYear() - tarih} yasindayim`
  );

  return new Date().getFullYear() - tarih;
}

// alert(yasHesapla("umut", 1998));

const umut = yasHesapla("umut", 1998);
const berfin = yasHesapla("berfin", 2001);
const berra = yasHesapla("berra", 2000);

// yas ortalamasini aliniz

alert((umut + berra + berfin) / 3);
*/

// ** ÖRNEK 4

/*
function isEvenOdd(x) {
  if (x % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
}

isEvenOdd(0);
*/

/*
function isEvenOdd(x) {
  const sonuc = x % 2 === 0 ? "CIFT" : "TEK";
  return sonuc;
}

console.log(isEvenOdd(5));
*/

// ** ÖRNEK 5 argüments keywordüyle parametre karsilama

/*
function sumAll(i) {
  let toplam = 0;
  for (let i = 0; i < arguments.length; i++) {
    toplam += arguments[i];
  }
  return toplam;
}

console.log(sumAll(24, 34, 56, 35, 12, 89, 23, 45, 78, 98));
*/
