//? Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//! Hesap Tablosu

const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const totalTd = document.getElementById("total");

// ! Variables

let gelirler = 0;

//* Ekle Formu

ekleBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  //gelirInput.value = "";
  ekleFormu.reset();
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.textContent = gelirler;
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler"));
  gelirinizTd.textContent = gelirler;
});
