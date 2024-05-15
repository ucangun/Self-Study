/*
let number = Math.trunc(Math.random() * 6 + 1);
console.log(number);
while (number !== 6) {
  number = Math.trunc(Math.random() * 6 + 1);
  console.log(number);
}
*/

/*
let i = "Merhaba";
for (i = 1; i <= 10; i++) {
  console.log(`${i} "Merhaba"`);
  console.error(`${i} "Error`);
}
*/
/*
//? n e kadar olan sayilarin toplami

let sum = 0;
const n = +prompt("Lütfen bir sayi giriniz ");
for (let number = 1; number <= n; number++) {
  sum += number;
}
console.log(sum);
*/
//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

/*
const a = +prompt("Lütfen bir sayi giriniz ");
let asal = true;

if (a === 1) {
  asal = false;
} else if (a === 2) {
  asal = true;
} else {
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      asal = false;
      break;
    }
  }
}

if (asal) {
  console.log(`${a} Asal bir sayidir`);
} else {
  console.log(`${a} Asal bir sayi degildir`);
}
*/

//? In Class
/*
let sayi=53
let primeNumber=true

for(let i = 2; i< sayi; i++ ){

   if (sayi%i==0 )
   {
primeNumber=false
   }
  
}

console.log( primeNumber ? "asaldır" : "asallık elden gitmiştir" );
*/

//? 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.

/*
for (i = 1; i <= 7; i++) {
  let number = Math.trunc(Math.random() * 100 + 1);
  console.log(number);
}
*/

//************** */ WHİLE ************

//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

/*
let number = +prompt("Lütfen 1 ile 100 arasinda bir sayi giriniz");
while (number > 100 || number < 1) {
  console.error("Hatali sayi girdiniz");
  number = +prompt("Lütfen 1 ile 100 arasinda bir sayi giriniz");
}

console.log("Tebrikler sayi 1 ile 100 arasinda");
*/

//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

/*
let number1;
do {
  number1 = +prompt("Lütfen 1 ile 100 arasinda bir sayi giriniz");
} while (number1 > 100 || number1 < 1);

alert("Giriş başarılı! Girdiğiniz sayı: " + number1);
*/

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK2: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

/*
let devam;
do {
  let vize = +prompt("Lutfen vize notunuzu giriniz");
  let final = +prompt("Lutfen final notunuzu giriniz");
  let gecmeNotu = vize * 0.4 + final * 0.6;

  console.log(gecmeNotu > 50 ? "Tebrikler" : "Gecemediniz");
  devam = prompt("Devam icin e tusuna basiniz");
} while (devam.toLowerCase() === "e");
*/

//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

/*
let letter = prompt("Lütfen bir harf giriniz");
while (letter !== "q") {
  letter = prompt("Lütfen bir harf giriniz");
  console.log(letter);
}
*/

/*
let letter;
do {
  letter = prompt("Lütfen bir harf giriniz");
} while (letter !== "q");

console.log("Tebrikler");
*/

//!!!!!!!!!!!  GUESS NUMBER
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let hak = 5;

while (hak > 0) {
  const guess = +prompt("Lütfen bir sayi tahmin ediniz");

  if (guess === number) {
    console.log("Tebrikler 🎉");
    break;
  } else if (number > guess) {
    console.log("too low 📉");
    hak--;
  } else {
    console.log("too high 📈");
    hak--;
  }
}

if (hak === 0) {
  console.log("Hakkiniz bitti");
}
