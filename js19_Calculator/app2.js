//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

//?operator değişkenleri (*******bu şekil global tutmayıp sürekli textcontent te değişiklik yaparsak işlem girildikten sonra, if ile üst ekrana geçer ya sayılar, işlem sonrası bir daha altta sayı göremeyiz ve sürekli uzun uzun yazmamak için, ve işlem e diğer fonksiyonlardan erişemeyiz)
let ustEkranText = "";
let altEkranText = "";
let islem = "";

//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
  number.onclick = () => {
    ekranaHazirlik(number.textContent);
    updateEkran();
  };
});

//!EKRANA HAZIRLIK

const ekranaHazirlik = (num) => {
  //todo kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün

  if (altEkranText === "0" && num !== "0" && num !== ".") {
    altEkranText = num;

    //! bu döngüden çık bu işini globaldeki değişkeni değiştirerek bitirdi ama bişey döndürmeyecek, daha önceki 0 ı da yok sayacak.yoksa 2 ye bas mesela 22 yazıyor, basılan 2 yi yok say, varolan 0 ı 2 yap

    return;
  }

  //todo kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin
  if (num == "." && altEkranText.includes(".")) return;

  //todo kullanıcı 10 haneden sonra girmesin
  if (altEkranText.length > 9) return;

  //todo kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
  if (altEkranText == "0" && num == "0") return;

  //?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
  altEkranText += num;
};

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {
  altEkranDiv.textContent = altEkranText;

  //?işlem girilince
  // üstekranda altta yazan rakam + işlem gözükmeli

  if (islem) {
    ustEkranDiv.textContent = `${ustEkranText} ${islem} `;
  } else ustEkranDiv.textContent = "";
};
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
    //?altEkranDiv boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. boş return ,yapmaya çalıştığınız işlemi yaptırmaz.
    //? return, fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir. return değer döndürmek zorunda değildir. boş return den sonra else if yerine if tercih etmeliyiz
    if (altEkranText === "") return;

    //todo eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)

    if (altEkranText && ustEkranText) hesapla();

    islem = op.textContent;

    ustEkranText = altEkranText;
    altEkranText = "";

    updateEkran();
  };
});
//?**************eşittir butonuna tıklandığında

equalButtons.onclick = () => {
  hesapla();
  updateEkran();
};

//! HESAPLA FONKSİYONU

const hesapla = () => {
  switch (islem) {
    case "+":
      sonuc = +ustEkranText + Number(altEkranText);
      break;
    case "-":
      sonuc = ustEkranText - altEkranText;
      break;
    case "x":
      sonuc = ustEkranText * altEkranText;
      break;
    case "÷":
      sonuc = ustEkranText / altEkranText;
      break;
    default:
      break;
  }

  altEkranText = sonuc;
  ustEkranText = "";
  islem = "";
};

//?AC butonuna basıldığında
document.querySelector(".ac").onclick = () => {
  islem = "";
  altEkranText = "";
  ustEkranText = "";

  updateEkran();
};

//? PM butonuna basıldığında
document.querySelector(".pm").onclick = () => {
  if (!altEkranText) return;

  altEkranText = altEkranText * -1;
  updateEkran();
};

//?percent % butonuna basıldığında
document.querySelector(".percent").onclick = () => {
  altEkranText = altEkranText / 100;

  updateEkran();

  altEkranText = "";
};
