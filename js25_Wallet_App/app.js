//? Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//! Hesap Tablosu
const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//! variables
let gelirler = 0;

//? Ekle Formu

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  //console.log(gelirler);
  // gelirInput.value = ''
  ekleFormu.reset();
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.textContent = gelirler;
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler);
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler);
});
