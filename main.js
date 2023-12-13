const API_KEY = "80544cd629934b5f910221101231212";

const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Cracow`;
// const URL = `http://api.weatherapi.com/v1/future.json?key=80544cd629934b5f910221101231212&q=Cracow&dt=2024-01-12`;

const getAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const temperatureElement = document.querySelector(".today-temperature");
  temperatureElement.textContent = `${data.current.temp_c} °C`;
};

getAPI();

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getToddayInformation = () => {
  const today = new Date();
  const day = today.getDate();
  const dayOfTheWeek = today.getDay();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const dayElement = document.querySelector(".todday-day");
  const timeElement = document.querySelector(".todday-time");

  dayElement.textContent = ` ${day} ${week[dayOfTheWeek]}`;
  timeElement.textContent = `${hours} : ${minutes}`;
};

getToddayInformation();
