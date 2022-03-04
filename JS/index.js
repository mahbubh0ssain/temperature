const API_KEY = `3cf7f11be6ed0ba65455b11d880cb3dc`;

const searchTemperature = () => {
  const cityName = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (temperature) => {
  const displayCityName = document.getElementById("show-city-name");
  displayCityName.innerText = temperature.name;

  const displayTempInDegree = document.getElementById("temp-degree");
  displayTempInDegree.innerText = `${temperature.main.temp} `;
  console.log(temperature);
  const displayClouds = document.getElementById("show-clouds");
  displayClouds.innerText = temperature.weather[0].main;

  //set weather icon dynamically
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", url);
};
