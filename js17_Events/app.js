let buton1 = document.getElementById("myButton");
let sonuc = document.getElementById("result");

// console.log(buton1)
// console.log(sonuc)

//! Callback yazım çeşitleri

//! 1.YOL
/*
buton1.addEventListener("click", function konsol() {
  console.log("buton1 clicked");
});
*/

//! 2.YOL

/*
buton1.addEventListener("click", function () {
  console.log("buton1 clicked");
  sonuc.textContent += "Button 1 clicked";
});

buton1.addEventListener("dblclick", function () {
  sonuc.textContent = "Button 1 double clicked";
  console.log("buton1 double clicked");
});
*/

//! 3.YOL (disaridan arrow / named fonksiyon cagirma)
/*
const clicked2 = () => {
  sonuc.textContent = "Button1 clicked";
};

buton1.addEventListener("click", clicked2);
*/
//! 4.YOL disardan fonksiyon cagirmak

/*
function clicked() {
  sonuc.textContent = "Button1 clicked function called from outside";
}

buton1.addEventListener("click", clicked);
*/

//? Mouseover and mouseout eventleri
/*
let myImg = document.getElementById("myImage");
console.log(myImg);

myImg.addEventListener("mouseover", () => {
  myImg.style.width = "300px";
});

myImg.addEventListener("mouseout", () => {
  myImg.style.width = "200px";
  //myImg.style.display = "none";
});

buton1.addEventListener("click", () => {
  myImg.style.display = "block";
});
*/
//? drop-down menu

/*
let secim = document.getElementById("colors");
let selectedColor = document.getElementById("selectedColor");

secim.addEventListener("change", () => {
  selectedColor.textContent = `Secilen Renk: ${secim.value}`;
  document.body.style.background = secim.value;
  //selectedColor.style.color = secim.value;
  //console.log("Degisti");
});
*/

//? Random background color

//random renk
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const buton2 = document.getElementById("colorButton");
const colorL = document.getElementById("colorList");

const colors = [];

buton2.addEventListener("click", () => {
  const renk = getRandomColor();

  const colorObject = { color: renk };
  colors.push(colorObject);
  console.log(colors);

  document.body.style.backgroundColor = renk;

  //! yeni rengi ekrana listeleme

  const listItem = document.createElement("li");
  listItem.style.backgroundColor = renk;
  listItem.textContent = renk;
  listItem.addEventListener("click", () => {
    document.body.style.backgroundColor = renk;
  });

  colorL.appendChild(listItem);
  //colorL.prepend(listItem);
});

//***************************************************/

//! Example

let resim = document.querySelector(".resim");
let ses1 = document.querySelector(".ses1");
let ses2 = document.querySelector(".ses2");
let ara = document.querySelector(".ara");
let baglat = document.querySelector(".baglat");
let konus = document.querySelector(".konus");
let kapat = document.querySelector(".kapat");

// Ara butonu

ara.addEventListener("click", () => {
  ses2.play();
  ses2.volume = 0.1;
});

// Baglat butonu

baglat.addEventListener("click", () => {
  ses2.pause();
  ses1.play();
  ses1.volume = 0.1;
  resim.src = "./helpers/connect.jpg";
});

// Konus butonu

konus.addEventListener("click", () => {
  ses1.pause();
  resim.src = "./helpers/call.jpg";
});

// Kapat butonu

kapat.addEventListener("click", () => {
  ses1.pause();
  resim.src = "./helpers/images.jpg";
});

//***************************************************/

//! Example

let alan = document.getElementById("username");
let buton3 = document.getElementById("login");
let user = document.getElementById("displayUsername");
/*
alan.addEventListener("input", () => {
  let username = alan.value;
  user.textContent = `Girdiginiz kullanici adi: ${username}`;
});
*/

let usr = "umut";

buton3.addEventListener("click", () => {
  let username = alan.value;
  if (username == usr) {
    user.textContent = `Girdiginiz kullanici adi: ${username}`;
    alan.value = "";
  } else {
    user.textContent = `Girdiginiz kullanici adi yanlis lütfen tekrar deneyiniz`;
  }
});

//***************************************************/

//! Example

const numbers = document.querySelectorAll(".number"); // Array benzeri nodelist döndürür

numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    if (number.textContent === "X") {
      number.textContent = index + 1;
    } else {
      number.textContent = "X";
    }
  });
});
