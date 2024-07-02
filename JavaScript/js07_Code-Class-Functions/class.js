//! DECLERATION
/*
islem(10, 13);

function islem(par1, par2, par3) {
  console.log(par1);
  console.log(par2);
  return par1 + par2 + par3;
}

let add = islem(3, 4, 5);
console.log(add);
*/
//! EXPRESSION
/*
const topla1 = function (a, b) {
  return a + b;
};

console.log(topla1(3, 5));
*/
//! ARROW
/*
const topla2 = (a, b) => a + b;
console.log(topla1(3, 5));

let isim = "Ashley Miller";

console.log(isim[0]);
console.log(isim[6]);
console.log(isim.length);
*/
//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

const thermo = function (cel) {
  return (cel * 9) / 5 + 3;
};

console.log(thermo(100));

//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

const cevir = function (x) {
  let ceviri = "";
  for (i = x.length - 1; i >= 0; i--) {
    ceviri += x[i];
  }
  return ceviri;
};

let sonuc = cevir("elma");
console.log(sonuc);

//* CLASS

const string = "hello world";

function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString(string));

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

/*
let kelime = prompt("Lütfen bir kelime yaziniz");

const polindrom = function (kelime) {
  let ceviri = "";
  for (i = kelime.length - 1; i >= 0; i--) {
    ceviri += kelime[i];
  }
  return ceviri;
};
kelime == polindrom(kelime)
  ? console.log(`${kelime} polindrom bir ifadedir`)
  : console.log(`${kelime} polindrom bir ifade degildir`);
*/

//! 4- Bir sayıyı tersine çevirecek bir fonksiyon yazın?

//* 1.YOL */

/* // UMUT
let num = prompt("Lütfen bir sayi giriniz");

const tersCevir = function (num) {
  let ceviri = "";
  for (i = num.length - 1; i >= 0; i--) {
    ceviri += num[i];
  }
  return ceviri;
};

let result = tersCevir(num);
console.log(result);
*/

//* 2.YOL */

const ters = (num) => {
  let numStr = num.toString();

  let reverse = "";
  for (i = numStr.length - 1; i >= 0; i--) {
    reverse += numStr[i];
  }
  return +reverse;
};

console.log(ters(456));
console.log(ters(321));

//* 3.YOL */

const ters2 = (num) => {
  let reverse = 0;

  while (num != 0) {
    reverse = reverse * 10;
    reverse += num % 10;

    num = Math.trunc(num / 10);
  }

  return reverse;
};

console.log(ters2(4567));

//! 5- Belirli bir sayının pozitif tam bölenlerinin toplamını bulan fonksiyonu yazınız?

function bölenToplam(num) {
  let toplam = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      toplam += i;
    }
  }
  return toplam;
}

console.log(bölenToplam(12));

//! 6- İlk 2 parametreyi çarpıp 3. parametreyi üs olarak alan fonksiyonu yazınız?

function islem(a, b, c) {
  return (a * b) ** c;
}

console.log(islem(3, 2, 2));

//! 7- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program...

function polindrom() {
  for (let i = 100; i < 1000; i++) {
    let numStr = i.toString();
    let reverse = "";

    for (c = numStr.length - 1; c >= 0; c--) {
      reverse += numStr[c];
    }
    if (numStr == reverse) {
      console.log(`${i} polindrom bir sayidir`);
    }
  }
}

//polindrom();

// HOCA

/*
const reverseNumber = (num) => {
  let numStr = num.toString();

  let reverse = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    reverse += numStr[i];
  }

  return    parseInt(reverse)==num ? `${num} sayısı polindromdur`:`${num} sayısı polindrom değildir`;
};

for(let i = 100; i<1000; i++){

   console.log( reverseNumber(i))
}
*/

//! 8-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?

function daireAlanCevre(r) {
  let alan = (Math.PI * r) ** 2;
  let cevre = 2 * Math.PI * r;
  console.log(`${cevre} , ${alan} `);
}

daireAlanCevre(2);

//! 9- tellFortune adlı bir fonksiyon yazın:

//? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
//? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

function tellFortune(job, location, partner, numKids) {
  let result = `Gelecekteki mesleginiz ${job}'dir, ${location}da yasiyorsunuz, ${partner} ile evlisiniz ve ${numKids} tane cocugunuz var`;
  console.log(result);
}

tellFortune("developer", "Almanya", "Dilara", 2);

//! 10- Write a function to calculate compound interest based on the principle amount
// ? Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.

function compoundInt(amount, rate, time, n) {
  // Bileşik faiz formülü: A = P (1 + r/n)^(nt)
  const base = 1 + rate / n;
  const exponent = n * time;

  // Doğru üstel hesaplama: base ** exponent
  const final = amount * base ** exponent;

  return final;
}

console.log(compoundInt(500, 0.4, 1, 4));

//! 11- Mükemmel sayiyi bulan fonksiyonu yaziniz...

function bölenToplam(num) {
  let toplam = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      toplam += i;
    }
  }
  return toplam == 2 * num
    ? `${num} mükemmel bir sayidir`
    : `${num} mükemmel bir sayi degildir`;
}
console.log(bölenToplam(28));
