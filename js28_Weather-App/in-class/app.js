//console.log("App.js working");

//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input.form-control");
const cardContainer = document.getElementById("card-container");

//! Variables
let apiKey = "75b251ce9d3d5c7bf9e4f1832b237076";
let url; // api request
let units = "metric"; // Fahrenheit - imperial
let lang = "en"; // for Deutsch DE

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const city = input.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`;
    getWeatherData();
  }
  form.reset();
});

//! Functions

const getWeatherData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // ? data destructure
    const { main, name, weather, sys } = data;

    //const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`; //^ alternatif

    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //^ openweathermap.org

    const card = document.createElement("div");
    card.classList.add("col");
    card.setAttribute("id", `${name}`);

    card.innerHTML = ` 
<div class="card mb-4 rounded-3 shadow-sm">
        <ul class="list-unstyled mt-2 mb-4">
            <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
            <h4 class="my-0 fw-normal">${name} <span ><sup><img src="https://flagsapi.com/${
      sys.country
    }/shiny/24.png" class="rounded-circle" alt=${
      sys.country
    }/> </sup></span></h4>
            <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${Math.round(
              main.temp
            )}<sup>°C</sup></h1>
            <h6 class="card-title pricing-card-title">Min : ${Math.round(
              main.temp_min
            )}<sup>°C</sup> - Max : ${Math.round(
      main.temp_max
    )}<sup>°C</sup>  </h6>
            <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
              main.pressure
            } <img src="./assets/wi-humidity.svg" height="30px"/>${
      main.humidity
    } </h6>
            <li><img src="${iconUrl}"/></li>
            <li>${weather[0].description.toUpperCase()}</li>
        </ul>
</div>
`;
    cardContainer.appendChild(card);
  } catch (error) {}
};
