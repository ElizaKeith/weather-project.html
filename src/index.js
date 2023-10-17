let now = new Date();
let h2 = document.querySelector("h2");
let hour = now.getHours();
let min = now.getMinutes();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Weather in ${searchInput.value}`;
}
let city = search;
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hour}:${min}`;

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
let apiKey = "ebef9ca4a8de66ed586fac628fade056";

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
}

let h3 = document.querySelector("h3");
h3.innerHTML = showTemperature;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);