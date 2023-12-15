const API_KEY = "80544cd629934b5f910221101231212";
const town = "Cracow";
const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${town}&days=7&aqi=no&alerts=no`;

const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getUTCFullYear();
const dayOfTheWeek = today.getDay(); //tu sa numery dni tygodnia poniedziałek

const createDayElement = (dayName, date, temperature) => {
  const newDayContent = document.createTextNode(dayName);
  const newParagraphDay = document.createElement("p");
  newParagraphDay.appendChild(newDayContent);

  const newDateContent = document.createTextNode(date);
  const newParagraphDate = document.createElement("p");
  newParagraphDate.appendChild(newDateContent);

  const newTemperatureContent = document.createTextNode(`${temperature}°C`);
  const newParagraphTemp = document.createElement("p");
  newParagraphTemp.appendChild(newTemperatureContent);

  const newImageSvg = document.createElement("img");
  newImageSvg.setAttribute("src", "assetes/svgFile/raindSvg.svg");

  const newDivContainer = document.createElement("div");
  newDivContainer.classList.add("tomorrow");
  newDivContainer.appendChild(newImageSvg);
  newDivContainer.appendChild(newParagraphDay);
  newDivContainer.appendChild(newParagraphDate);
  newDivContainer.appendChild(newParagraphTemp);

  elementMother.appendChild(newDivContainer);
};

const getTodayAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const temperatureElement = document.querySelector(".today-temperature");
  temperatureElement.textContent = `${data.current.temp_c}°C`;
};

const getWeekAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const weekData = data.forecast.forecastday.map((day, index) => {
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

  weekData.forEach((day, index) => {
    if (index > 0) {
      createDayElement(day.nameOfDay, day.date, day.avgTemp);
    } else {
      return;
    }
  });
};

getWeekAPI();

getTodayAPI();

const getToddayInformation = () => {
  const dayElement = document.querySelector(".todday-day");
  dayElement.textContent = ` ${day}-${month}-${year} ${WEEK[dayOfTheWeek]}`;
};

getToddayInformation();

const elementMother = document.querySelector(".week-container");
