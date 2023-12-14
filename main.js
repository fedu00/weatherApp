const API_KEY = "80544cd629934b5f910221101231212";

const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Cracow`;
// const URL = `http://api.weatherapi.com/v1/future.json?key=80544cd629934b5f910221101231212&q=Cracow&dt=2024-01-12`;

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getTodayAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // console.log("dzis", data);

  const temperatureElement = document.querySelector(".today-temperature");
  temperatureElement.textContent = `${data.current.temp_c}°C`;
};

const getTomorowAPI = async (town, date) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/future.json?key=${API_KEY}&q=${town}&dt=${date}`
  );
  const data = await response.json();

  const tomorowDayOfWeekElement = document.querySelector(".tomorow-text-day");
  const tomorowDateElement = document.querySelector(".tomorow-text-date");
  const tomorowTemperatureElement = document.querySelector(
    ".tomorow-text-temperature"
  );
  tomorowDayOfWeekElement.textContent = `Piątek`;
  tomorowDateElement.textContent = `${data.forecast.forecastday[0].date}`;
  tomorowTemperatureElement.textContent = `${data.forecast.forecastday[0].day.avgtemp_c}°C`;

  console.log("jutro", data);
  // console.log("jutro", data.forecast.forecastday[0].day.avgtemp_c);
  // console.log("jutro", data.forecast.forecastday[0].date);
};

getTodayAPI();

getTomorowAPI("Cracow", "2024-01-12");

const getToddayInformation = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getUTCFullYear();
  const dayOfTheWeek = today.getDay();
  // const hours = today.getHours();
  // const minutes = today.getMinutes();

  const dayElement = document.querySelector(".todday-day");
  // const timeElement = document.querySelector(".todday-time");

  dayElement.textContent = ` ${day}.${month}.${year} ${WEEK[dayOfTheWeek]}`;
  // timeElement.textContent = `${hours} : ${minutes}`;
};

getToddayInformation();
