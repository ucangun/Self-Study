const header = document.querySelector(".header");
const img = document.querySelector(".img");
const body = document.querySelector(".body");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const audio1 = new Audio("./image/Aslan Kükreme Sesi.mp3");
const audio2 = new Audio("./image/retro-ringtone .mp3");

header.style.textAlign = "center";
header.style.color = "red";

img.onmouseover = () => {
  img.src = "./image/aslan1.jpeg";
};

img.onmouseout = () => {
  img.src = "./image/aslan2.jpeg";
  audio1.play();
};

btn1.addEventListener("click", () => {
  img.src = "./image/img.gif";
  audio1.pause();
  audio2.play();
});

btn2.addEventListener("click", () => {
  img.src = "./image/telbagla.gif";
  audio2.pause();
});

btn3.addEventListener("click", () => {
  img.src = "./image/telefon.gif";
});
