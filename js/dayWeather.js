const elementWeekContainer = document.querySelector(".week-container");

export const createDayElement = (dayName, date, temperature) => {
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

  elementWeekContainer.appendChild(newDivContainer);
};

export default class DayWeather {
  constructior(nameOfDay) {}
  test(day) {
    createDayElement(day.nameOfDay, day.date, day.avgTemp);
  }
}
