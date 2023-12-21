import DayWeather from "./dayWeather.js";

const API_KEY = "80544cd629934b5f910221101231212";

const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const elementWeekContainer = document.querySelector(".week-container");

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getUTCFullYear();
const dayOfTheWeek = today.getDay();

const getToddayInformation = ({ date, nameOfDay, avgTemp }) => {
  const dayElementContext = document.querySelector(".todday-day");
  const dayElementTemperature = document.querySelector(".today-temperature");
  dayElementContext.textContent = ` ${date} ${nameOfDay}`;
  dayElementTemperature.textContent = `${avgTemp}°C`;
};

const getWeekAPI = async (town = "Cracow") => {
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${town}&days=7&aqi=no&alerts=no`;
  const response = await fetch(URL);
  const data = await response.json();
  const downloadedWeekData = data.forecast.forecastday;

  const weekData = downloadedWeekData.map((day, index) => {
    const isEndOfWeek = dayOfTheWeek + index > 6;
    const nameOfDay = isEndOfWeek
      ? dayOfTheWeek + index - 7
      : dayOfTheWeek + index;
    return {
      date: day.date,
      nameOfDay: WEEK[nameOfDay],
      avgTemp: day.day.avgtemp_c,
    };
  });

  const todayData = weekData.splice(0, 1);
  getToddayInformation(todayData[0]);

  const elementIsEpmty = elementWeekContainer.querySelector("div")
    ? false
    : true;

  console.log(elementIsEpmty);
  if (elementIsEpmty) {
    weekData.forEach((day) => {
      const newDay = new DayWeather();
      newDay.test(day);
    });
  } else {
    elementWeekContainer.innerHTML = "";
    weekData.forEach((day) => {
      const newDay = new DayWeather();
      newDay.test(day);
    });
  }
};

getWeekAPI();

const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const townElement = document.querySelector(".town-container");

buttonElement.addEventListener("click", () => {
  const newTown = inputElement.value;
  townElement.innerHTML = `${newTown}`;
  getWeekAPI(newTown);
  inputElement.value = "";
});
