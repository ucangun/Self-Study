//* ======================================================
//*                     (OOP)
//*             Object Oriented Programming
//* ======================================================

const book1 = {
  title: "Karamazov Kardeşler",
  yazar: "Dostyevski",
  year: 1980,
  ozetFunction: function () {
    `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir `;
  },
};

console.log(book1.title);
console.log(book1.ozetFunction());

const book2 = {
  title: "yaprak dökümü",
  yazar: "reşat nuri güntekin",
  year: 1980,
  ozetFunction: function () {
    return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`;
  },
};

console.log(book2.ozetFunction());

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
