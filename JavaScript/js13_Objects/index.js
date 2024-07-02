//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1 = new Object({
  name: "BMW",
  engine: 1.6,
  model: 2000,
});

const car2 = new Object({
  name: "Mercedes",
  engine: 2.0,
  model: 2000,
});

console.log(car1);
console.log(car1.name);
console.log(car1.engine); // dot notation
console.log(car1["engine"]); // square bracket
//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car3 = new Object({});
car3.name = "Volvo";
car3.engine = 1.8;

console.log(car3);

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------

function calisanlar(a, b, c) {
  this.calisanId = a;
  this.calisanName = b;
  this.calisanMaas = c;
}
const kisi1 = new calisanlar(101, "mehmet", 8000);
const kisi2 = new calisanlar(102, "rengin", 1000);

console.log(kisi1);
console.log(kisi2);
console.log(kisi2.calisanName);

//! eğer object constructor kullanacaksak this gerekli, arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder

//* ---------------------------------------------------------
//* 3-   Object Literal (en çok kullanılan yol)
//* ---------------------------------------------------------

const person = {
  name: "Umut",
  surname: "Can",
  birth: 1998,
  job: "developer",
  hasDriverLicence: true,
  language: ["english", "german", "javascript"],
  children: {
    firstChild: "Sarah",
    secondChild: "Lucy",
  },
};

console.log(person);
console.log(person.name);
console.log(person.language[1]); // German
console.log(person.children.firstChild); // Sarah

//?   Rewrite

person.birth += 5;
console.log(person.birth);

//? yeni property eklemek

person.location = "Germany";
console.log(person);

//* örnek

person.language.map((a) => a.toUpperCase()).forEach((a) => console.log(a));

//* ---------------------------------------------------------
//*    Objects teki Yöntemler
//* ---------------------------------------------------------

const mensch = {
  uname: "Umut",
  surname: "Can",
  birth: 1998,
  job: "developer",
  hasDriverLicence: true,
  yasHesapla: function () {
    return `${this.uname} kisisi ${2024 - this.birth} yasindadir`;
  },
  selamla: () => "Merhaba",
};

//! Nesnenin icindeki degerleri kullanarak bir fonksiyon yazacaksak this keywordü kullanilmali, arrow function this i desteklemedigi icin, ilk fonksiyonda decleration yöntemini tercih ettik

console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.selamla());

//********/

console.log(Object.values(mensch)); // objectin value larini bir diziye atti
console.log(Object.keys(mensch));

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Rengin",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Kemal",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Halil",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

console.log(people);

//* Ornek yası 33 ün üstünde olan kişilerin name lerini listele

people.filter((a) => a.age > 33).forEach((a) => console.log(a.name));

//* Ornek1 people dizisindeki job lari göster

people.forEach((a) => console.log(a.job));

//* Ornek2 yaşları 1 er arttır ve sonucu yeni bir diziye aktar

const yaslar = people.map((kisi) => kisi.age + 1);
console.log(yaslar);
console.log(people[0].age);

//* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir

console.log(people.map((p, i, arr) => (arr[i].age = p.age + 1)));
console.log(people[0].age);

console.log(people.map((p) => (p.age += 1)));
console.log(people[0].age);

//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak joblari olmadam yeni bir object li dizi oluşturalım, keyleri de farklari olsun

const yeniPeople = people.map((human) => ({
  isim: human.name,
  soyad: human.surname,
  yas: human.age + 1,
}));

console.log(yeniPeople);
console.log(people);

//* Ornek5 her elemanin name ini büyük harfli yaz, yaslarini 2 kat yap, job larinin önüne senior kelimesi ekleyelim ve bunlari yeni bir diziye atalim

const yeniPople2 = people.map((person) => ({
  name: person.name.toUpperCase(),
  surname: person.surname,
  age: person.age * 2,
  job: "senior " + person.job,
}));

console.log(yeniPople2);
console.log(people);

//* ornek6 people dizisine yeni object veri ekleyelim

people.push({
  name: "ipek",
  surname: "bilir",
  job: "developer",
  age: 44,
});

console.log(people);

//* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın (keylerini de degistirelim)

const developer = people
  .filter((a) => a.job === "developer")
  .map((a) => ({
    ad: a.name,
    yas: a.age,
  }));
console.log(developer);

//* Ornek8: ortalama yasi hesaplayiniz.

console.log(
  people.reduce((toplam, eleman) => toplam + eleman.age, 0) / people.length
);

//?    nested objects

const menschen = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//! Nested Objectlerde FOR - IN kullanılabilir, index sonuçta. Ama for of kullanılamaz , dizilerde verileri almak için itere eden for of object te çalışmaz
//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir

//! FOR IN

for (let i in menschen) {
  console.log(i);

  console.log(menschen[i]);
  console.log(menschen[i].name);
}

//!FOR OF

// for (let i of menschen) {
//   console.log(i);  //menschen is not iterable

// }
for (let i of Object.keys(menschen)) {
  console.log(i); //person1,person2...

  console.log(menschen[i]);
}

console.log(Object.values(menschen)); //bütün süslüleri diziye attı

for (let i of Object.values(menschen)) {
  console.log(i); //bütün süslüleri getirdi
}

//console.log(Object.entries(menschen));
