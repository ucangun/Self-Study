console.log("*** NEW GEN OPERATORS ***");

//* ======================================
//* DESTRUCTING (OBJECT)
//* ======================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 3000,
};

const product1 = {
  id: "12345",
  brand: "Samsung",
  type: "smart phone",
  price: 5000,
};

//? . notasyonu ile erisim mümkün

console.log(product.type);
let proPrice = product.price;
console.log(proPrice);

proPrice += 100;
console.log(proPrice);
console.log(product.price);

//product.price = proPrice;

//? square bracket

console.log(product["brand"]);

//? DESTRUCTING yöntemi

//! Degisken isimleri objedeki keylerle ayni olmalidir

let { id, price, brand, type } = product;
console.log("ID:", id);
console.log("brand:", brand);
console.log("price:", price);
console.log("type:", type);

price += 500;
console.log(price);
console.log(product.price);

// product.price = price;
// console.log(product.price);

//! 2. Keyler isim degisiklikleriyle yapilir
let {
  id: pro1Id,
  price: pro1Price,
  type: pro1type,
  brand: pro1brand,
} = product1;

console.log(pro1brand);
console.log(pro1Id);
console.log(pro1Price);
console.log(pro1type);

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

// ? Level 1

// const { kisi1, kisi2 } = insanlar;
// console.log(kisi1);

// ? Level 2

// const { adi, kimlikNo, soyadi, meslek, maas } = kisi1;
// console.log(adi, kimlikNo, soyadi, meslek, maas);

//? iki seviyeli

const {
  kisi1: { adi, soyadi },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad },
} = insanlar;

console.log(kisi2Soyad);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("****************************");
//* 1.
team.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Surname:", person.surname);
  console.log("Job:", person.job);
  console.log("Age:", person.age);
});
//* 2.
team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
  console.log("**********************");
});
//* 3.
team.forEach(({ name, surname, job, age }) => {
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
  console.log("**********************");
});

//!---- FUNCTIONLARDA DESTRUCTION KULLANIMI ----

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());

let { name, surname, job, age } = objGoster();
console.log(name);
console.log("Age:", age);
console.log(surname);
console.log(job);

//? Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1980",
};

const printData = (data) => {
  console.log(`${data.id} - ${data.desc} - ${data.createdTime} `);
};

const printDataDestr = (data) => {
  const { id, desc, createdTime } = data;
  console.log(`${id} - ${desc} - ${createdTime} `);
};

const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`${id} - ${desc} - ${createdTime} `);
};
printData(data);
printDataDestr(data);
printDataAir(data);

console.log("**********************");
console.log("**********************");
console.log("**********************");

//* ======================================
//* DESTRUCTING (ARRAY)
//* ======================================

const people = ["Ali", "Veli", "Harvey", "Ashley"];
let ali = people[0];
console.log(ali);

const [kisi1, kisi2, , kisi4] = people;
console.log(kisi1, kisi2, kisi4);

//* ======================================
//* REST (...)
//* ======================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY

const araclar = ["Kamyon", "Tir", "Kamyonet", " Motosiklet", "Minibüs", "Taxi"];

const [arac1, arac2, arac3, , ...binekAraclar] = araclar;
console.log(arac3);
console.log(binekAraclar);

//? OBJECT

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
};

const { ad, yas, ...geriKalanlar } = person;
console.log(geriKalanlar);

//! 2- Bir fonksiyonun argümanlarini diziye cervirmek icin kullanilabilir.

const topla = (a, b) => a + b;
console.log(topla(1, 5, 7, 9, 3));

//*
const toplam = (...sayilar) => {
  return sayilar.reduce((a, b) => a + b);
};
console.log(toplam(1, 5, 7, 9, 3));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmis olduk.

//* ======================================
//* SPREAD (...)
//* ======================================
