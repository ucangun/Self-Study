//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const degiskenAdi = "Javascript";
const sayi = 6;
console.log(typeof degiskenAdi);
console.log(typeof sayi);

// degiskenAdi = "osman"; //  Assignment to constant variable.
//const ile tanimlanan degisken degistirilemez.

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil = "javascript";

dil = "java";

console.log(dil);

let sayi2 = 34;
console.log(sayi2 + 7);

let sayi3 = "34";
console.log(sayi3 + 7);

//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar

console.log(sayi3 - 7);

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi4 = 37;
sayi4 = 1907;

console.log(sayi4);

console.log("************************************");

var ilk = "global";
console.log(ilk);

{
  console.log(ilk);
  ilk = "naber";
  console.log(ilk);

  var ikinci = "nasilsin";
}

console.log(ilk);
console.log(ikinci); // var oldugu icin süslünün icindeki degiskene süslünün disindan da erisebildim

console.log("************************************");
// ! LET SCOPE
let first = "osman";
console.log(first);

{
  console.log(first);
  first = "ali";

  let second = 45;
  second = 46;
  console.log(second);
}
console.log(first);
//console.log(second);

//block taki elemana dışarıdan erişemeyiz (const ve let için)

console.log("************************************");
// ! CONST SCOPE

const erste = "mustafa";
console.log(erste);

{
  console.log(erste);
  //erste = "uslu"; // const degistiremem

  const zweite = "ayca";
  console.log(zweite);
}

console.log(zweite);

// const ve let icin scope icinde olan scope icinde kalir.
