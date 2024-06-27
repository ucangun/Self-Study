//console.log("App.js working");

//! Selectors

const form = document.querySelector("form");
const input = document.querySelector("form input.form-control");
const cardContainer = document.getElementById("card-container");
const alertMessage = document.getElementById("alert");
const locate = document.getElementById("locate");
const locationDiv = document.getElementById("userLocation");
const langButton = document.querySelector(".language");

//! Variables
let apiKey = "75b251ce9d3d5c7bf9e4f1832b237076";
let url; // api request
let units = "metric"; // Fahrenheit - imperial
let lang = "en"; // for Deutsch DE
let cities = [];
let userLocation = false;

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

locate.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    //console.log(coords);
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${apiKey}`;
    userLocation = true;
    getWeatherData();
  });
});

langButton.addEventListener("click", (e) => {
  if (e.target.textContent === "DE") {
    input.setAttribute("placeholder", "Suche nach einer Stadt");
    lang = "de";
  } else if (e.target.textContent === "EN") {
    input.setAttribute("placeholder", "Search for a city");
    lang = "en";
  }
});

//! Functions

const getWeatherData = async () => {
  try {
    // const response = await fetch(url); //* fetch ile
    // const data = await response.json();

    //const response = await axios(url); //* axios ile
    const { data } = await axios(url);

    // ? data destructure
    const { main, name, weather, sys } = data;

    //const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`; //^ alternatif

    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //^ openweathermap.org

    if (!cities.includes(name)) {
      cities.push(name);
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

      if (userLocation) {
        locationDiv.appendChild(card);
        userLocation = false;
      } else {
        cardContainer.appendChild(card);
      }

      //! Remove Elements
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("bi-x-circle")) {
          const card = e.target.closest(".col");
          cities = cities.filter((city) => city !== card.id);
          //cities.splice(cities.indexOf(card), 1);
          card.remove();
        }
      });
    } else {
      alertMessage.classList.remove("d-none");
      alertMessage.textContent = `You already know the weather for ${name}, Please search for another city 😉`;
      setTimeout(() => {
        alertMessage.classList.add("d-none");
      }, 3000);
    }
  } catch (error) {}
};
