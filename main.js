
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "895ee0deb98fc7dcd2581635e2c11db2";

console.log(apiKey);
const searchBox = document.getElementById("city");
const searchButton = document.querySelector(".search button");
const result = document.getElementById("result");

const weatherFinder = async (city) => {
  const response = await fetch(
    `${apiURL}&q=${city}&appid=${apiKey}&units=metric`
  );
  const weatherData = await response.json();

  const cityName = weatherData.name;
  const currentTemp = weatherData.main.temp;
  const feelLike = weatherData.main.feels_like;
  const country = weatherData.sys.country;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const pressure = weatherData.main.pressure;

  result.innerHTML = `
    <div class="row">
            <div class="col-6 text-center">
                 <h1 class="text-uppercase">${cityName}</h1>
                 <h1 style="font-size: 60px;">${currentTemp}&deg;C</h1>
                 <h4>Feels Like : ${feelLike}&deg;C </h4>
            </div>
            <div class="col-6">
               <ul class="list-group list-group-flush fs-4 fw-bold">
                   <li class="list-group-item text-light bg-info bg-opacity-10 border-bottom border-info">Country : ${country}</li>
                   <li class="list-group-item text-light bg-info bg-opacity-10 border-bottom border-info">Humidity : ${humidity}% </li>
                   <li class="list-group-item text-light bg-info bg-opacity-10 border-bottom border-info">Wind Speed : ${windSpeed}m/s </li>
                   <li class="list-group-item text-light bg-info bg-opacity-10 border-bottom border-info">Pressure : ${pressure} </li>
                 </ul>
            </div>
        </div>
    `;
  console.log(
    cityName,
    currentTemp,
    feelLike,
    country,
    humidity,
    windSpeed,
    pressure
  );
};
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  weatherFinder(searchBox.value);
});