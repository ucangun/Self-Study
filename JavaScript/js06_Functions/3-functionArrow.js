// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !            3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Örnek1: 3 ün katı olup olmadığını kontrol eden fonksiyon

const control = (sayi) =>
  sayi % 3 == 0 ? "3 ün katidir" : "3 ün kati degildir";

console.log(control(34));
console.log(control(36));

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
  console.log("===========================");
  console.log("     JAVASCRİPT DERSİ      ");
  console.log("===========================");
};

menu();

//*Örnek3: silindirin hacmini hesapla (pi*r**2*h)

// const hacimHesapla = (r, h) => { return Math.PI * r * r * h};

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(hacimHesapla(3, 5).toFixed(2));

//* ORNEK4: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz. ve bu n sayısına kadar olan elemanları toplayınız
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
  let fiboSol = 1;
  let fiboSag = 1;
  let yeniFibo = 0;
  let toplam = 2;
  for (let i = 1; i < n - 1; i++) {
    yeniFibo = fiboSol + fiboSag;

    fiboSol = fiboSag;
    fiboSag = yeniFibo;
    console.log(`${i + 2}. fibo sayısı ${yeniFibo}`);
    toplam += yeniFibo;
  }

  console.log(toplam);
  return yeniFibo;
};

console.log(fibonacciNumber(7));
//console.log(fibonacciNumber(8));

/* -------------------------------------------------------------------------- */
// Çok fazla sayıda gönderilen değerler için tek tek değişken yazmak yerine function declaration ve exp functionda arguments keyword ü kullanılır .Ancak arrow functionda arguments kelimesi tanımlı değildir
// const arg2 = function () {
//   console.log(arguments);
// };
// arg2(45, 78, 42, 23, 56);

const arg = () => {
  console.log(arguments);
};
// arg(34,55,78,89,12,345,67) //arrow desteklemedi

//!arrow function da arguments desteklenmediği için, TÜÜÜMMMMM fonksiyonlarda geçerli (bu konuyu sonra göreceğiz) ... yani rest operatörü kullanabiliriz
const arg3 = (...a) => {
  console.log(a); //[34, 55, 78, 89, 12, 345, 67]
};
arg3(34, 55, 78, 89, 12, 345, 67);
arg3("merhaba", "hi", "hallo");
