//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* example1 onmouseover, onmouseout

const js = document.querySelector("#js");
const badi = document.querySelector("#badi");

js.onmouseover = () => {
  badi.style.backgroundColor = "pink";
  js.style.color = "red";
};

js.onmouseout = () => {
  badi.style.backgroundColor = "orange";
};

//* example2 onclick, ondoubleclick

const bir = document.querySelector(".bir");
const iki = document.querySelector(".iki");

bir.onclick = () => {
  bir.src = "./img/logo2.png";
  iki.src = "./img/js_logo.png";
};

iki.onclick = () => {
  bir.src = "./img/js_logo.png";
  iki.src = "./img/logo2.png";
};

iki.ondblclick = () => {
  iki.src = "./img/iki.webp";
};

// aynı etikete hem click hem dblclick verirsek istenmeyen sonuçlar olabilir, yorumdaki gibi yazarsak sorun çıkmaz

//*example3

const buton = document.querySelector("#btn");

buton.onclick = () => {
  buton.textContent = "TIKLANDI";
  badi.style.background = "aqua";
  document.querySelector("#par").style.fontSize = "40px";
};

// ? METHOD-2 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------

buton.addEventListener("click", () => {
  buton.textContent = "TIKLANDI";
  badi.style.background = "aqua";
  document.querySelector("#par").style.fontSize = "40px";
});

//* EXAMPLE-4 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-3 (HTML-INLINE)
//?---------------------------------------------------------------

// kodları html sayfasında
