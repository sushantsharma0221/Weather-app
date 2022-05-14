let inputTxt = document.querySelector(".search");
let button = document.querySelector(".searchbtn");
let innerCon = document.querySelector(".innerCon");
const API_Key = "a4481813ee3e52c84b417ec5b99aea63";

button.addEventListener("click", () => {
  const cityInput = inputTxt.value;
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + cityInput + "')";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`
  )
    .then((res) => res.json())
    .then((data) => {
      inputTxt.value = "";
      innerCon.innerHTML = `
    <h2 class="city"> Weather in <b> ${data.name}</b> </h2>

    <h2 class="temp"><b> ${data.main.temp}°C </b></h2>
    <h5 class="description"> ${data.weather[0].description} <i class='fas fa-cloud-sun'></i></h5>

    <h5 class="humidity">Humidity: ${data.main.humidity}%</h5>
    <h5 class="wind">Wind: ${data.wind.speed} km/hr</h5>

`;
    });
});
