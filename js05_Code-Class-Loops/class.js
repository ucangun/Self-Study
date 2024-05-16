// ? AND Operatörü

/*
console.log(2 && 5);

console.log(Boolean(2 && 5));

console.log(0 && 7);
console.log("0" && 7);
console.log(Boolean(0));

// & object / Array  with &&

console.log({} && "Hello"); //Hello
console.log([] && "Hello"); //Hello

console.log(Boolean([])); //true
console.log(Boolean({})); //true

// & Falsy string with &&

console.log("" && "World"); // ilk değer boş string döner
console.log("" && "World"); //
console.log(`` && "World"); //

// & Falsy null with &&

console.log(null && "Hello World"); //
console.log(NaN && "Hello World"); //
console.log(null && NaN); //null
*/

/*

//  ? OR operatörü ||

// & Truthy value with ||

console.log(2 || 5); //2

// & Falsy value with ||

console.log(0 || 7); //7

console.log(0 || ""); //boş string döner

// & object / Array  with ||
console.log({} || "Hello"); // {}
console.log([] || "Hello"); // []

// & Falsy null with ||

console.log(null || 1); //1
console.log(null || NaN); //NaN

*/

// ! Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.

/*
let birthYear = 1998;
let age = 2024 - birthYear;

if (age >= 18) {
  console.log("Sigara kullanabilirsiniz");
} else {
  console.log("Sigara kullanamazsiniz");
}
*/

/*
let age = +prompt("Lütfen yasinizi giriniz");

if (age >= 18) {
  console.log("Sigara kullanabilirsiniz");
} else if (age < 18) {
  console.log("Sigara kullanamazsiniz");
} else {
  alert("Gecerli bir deger girmediniz");
}
*/

/*
let age = +prompt("Lütfen yasinizi giriniz");
console.log(age >= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");
*/

// * isNaN()

/*
let x = +prompt("Bir sayi giriniz");
console.log(isNaN(x));
*/

// ! Kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.

/*
let x = +prompt("Bir sayi giriniz");
while (isNaN(x)) {
  x = +prompt("Bir sayi giriniz");
}
*/

/*
let x;
do {
  x = +prompt("Bir sayi giriniz");
} while (isNaN(x));
*/

// ! Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın

/*
const user = "umut";
const pass = 1234;
let hak = 3;

while (hak > 0) {
  let username = prompt("Kullanıcı adınızı girin:");
  let password = +prompt("Parolanızı girin:");

  if (username === user && password === pass) {
    alert(`Hoş geldiniz, ${username}!`);
    break;
  } else {
    hak--;
    if (hak > 0) {
      alert("Kullanıcı adı veya parola yanlış. Lütfen tekrar deneyin.");
    } else {
      alert("3 kez yanlış girdiniz.");
    }
  }
}
if (hak === 0) {
  alert("Üç kez yanlış giriş yapıldı. Lütfen daha sonra tekrar deneyin.");
}
*/

/*
for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a = a + "#";
  }
  console.log(a);
}
*/

// ! piramid
//*      #
//*     ###
//*    #####
//*   #######
//*  #########

/*
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let b = 1; b <= rows - i; b++) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "#";
  }
  console.log(row);
}
*/

// !
//     *
//     * *
//     * * *
//     * * * *
//     * * * * *

/*
let lines = 5;

for (let i = 1; i <= lines; i++) {
  let row = "";
  for (let y = 1; y <= i; y++) {
    row += "* ";
  }
  console.log(row);
}
*/

// ! Kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

/*
let ortalama;
let toplam = 0;
for (let i = 1; i <= 5; i++) {
  let number;
  number = +prompt(`Lütfen ${i}. sayıyı giriniz:`);
  toplam = toplam + number;
  ortalama = toplam / 5;
}
console.log(toplam, ortalama);
*/

// ! 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm

/*
let adet = 0;
for (let i = 1000; i <= 2000; i++) {
  if (i % 15 === 0) {
    adet++;
  }
}
console.log(adet);
*/

//while
/*
let sayi = 1000
let sayacc=0
while (sayi <= 2000) {
    if(sayi % 3 == 0 && sayi % 5 == 0) {
        console.log(sayi);
    sayacc++;

    }
    sayi++
} 

console.log(sayacc);
*/

// ! Armstrong number while solution

let num = +prompt("Enter a number:");
let originalNumber = num;
let sayac = 0;
let sum = 0;

while (originalNumber != 0) {
  originalNumber = Math.floor(originalNumber / 10);
  console.log(originalNumber);
  sayac++;
}

originalNumber = num;

while (originalNumber > 0) {
  let sayi = originalNumber % 10;
  sum += sayi ** sayac;
  originalNumber = Math.floor(originalNumber / 10);
}

sum == num
  ? console.log(num + " is an Armstrong number.")
  : console.log(num + " is not an Armstrong number.");
