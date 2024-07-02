const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const equal = document.querySelector(".equal");

let altekranText = "";
let üstEkranText = "";
let islem = "";
let sonuc;

num.forEach((number) => {
  number.onclick = () => {
    // altekranText = number.textContent;
    // current.textContent = altekranText;
    ekranaHazirlik(number.textContent);
  };
});

//! EKRANA HAZIRLIK ISLEMLERI

const ekranaHazirlik = (num) => {
  //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
  if (altekranText == "0" && num == "0") return;

  // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
  if (altekranText == "0" && num !== "0" && num !== ".") {
    altekranText = num;
    updateEkran();
    return;
  }
  //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

  if (num == "." && altekranText.includes(".")) return;

  //? kullanıcı 10 haneden sonra girmesin

  if (altekranText.length > 9) return;

  altekranText += num;
  updateEkran();
};

//! EKRANDA GÖSTERME ISLEMLERI
const updateEkran = () => {
  current.textContent = altekranText;
  if (islem) {
    previous.textContent = üstEkranText + " " + islem;
  } else {
    previous.textContent = "";
  }
};

operator.forEach((op) => {
  op.onclick = () => {
    if (altekranText === "") return;

    if (altekranText && üstEkranText) hesapla();
    islem = op.textContent;
    üstEkranText = altekranText;
    altekranText = "";
    updateEkran();
  };
});

equal.onclick = () => {
  hesapla();
  updateEkran();
};

const hesapla = () => {
  switch (islem) {
    case "+":
      sonuc = +üstEkranText + +altekranText;
      break;
    case "-":
      sonuc = üstEkranText - altekranText;
      break;
    case "x":
      sonuc = üstEkranText * altekranText;
      break;
    case "±":
      sonuc = üstEkranText / altekranText;
      break;
    default:
      break;
  }
  altekranText = sonuc;
  üstEkranText = "";
  islem = "";
};

document.querySelector(".ac").onclick = () => {
  islem = "";
  üstEkranText = "";
  altekranText = "";
  updateEkran();
};

document.querySelector(".pm").onclick = () => {
  if (altekranText) {
    altekranText *= -1;
    updateEkran();
  }
};

document.querySelector(".percent").onclick = () => {
  if (altekranText) {
    altekranText /= 100;
    updateEkran();
  }
};
