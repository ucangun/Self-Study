console.log("App.js working");

//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input.form-control");

//! Variables
let apiKey = "75b251ce9d3d5c7bf9e4f1832b237076";
let url; // api request
let units = "metric"; // Fahrenheit - imperial
let lang = "en"; // for Deutsch DE

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&apiKey`;
});
