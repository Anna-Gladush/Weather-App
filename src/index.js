import { format } from "date-fns";
import "./styles/style.css";
import { weatherTools } from "./weatherTools.js";
import { createDOM } from "./createDOM.js";
import { json, forecast_json, air_pollution } from "./openWeather.js";
import Photo from './assets/icons/weather/01d.svg';
import Direct from './assets/icons/direction/se.svg';
import girl from './assets/illustrations/clear.svg';


// const div = document.querySelector('.weather');

// Variables
const w_name = json['weather'][0]['main'];
// const w_desc = json['weather'][0]['description'];
const temperature = Math.round(json['main']['temp']);
const temperature_feels = Math.round(json['main']['feels_like']);
const pressure = Math.round(json['main']['pressure']);
const humidity = Math.round(json['main']['humidity']);
const temp_max = Math.round(json['main']['temp_max']);
const temp_min = Math.round(json['main']['temp_min']);
const visibility = Math.round((json['visibility']*10/1000))/10;
const speed = Math.round(json['wind']['speed']);
const direction = json['wind']['deg']


createDOM.createCurrentWeatherDOM(temperature, Photo, w_name, temp_min, temp_max, temperature_feels, humidity, pressure, visibility, direction, Direct, speed, girl)


for (let i = 8; i > 0; i--) {
  createDOM.card('11 April', Photo, 'weather-icon', temp_min, temp_max, '86%', '1013hPa');
}


forecast_json.list.forEach(forecast => {
  const date = weatherTools.dateConverterUTC(forecast.dt);
  console.log(format(date, "dd MMM HH:mm"))
})

// import Photos from './assets/icons/weather/';

// console.log(json);
// console.log(new Date(json.dt));
// console.log(forecast_json);
// console.log(air_pollution);
// console.log(weatherTools.windDirection('144'));
// console.log(weatherTools.BeaufortScale('16'));


// const API = '06d88c219a26346c3631c659748fc09b';

const searchCity = () => {
  const input = document.getElementById('search-city');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log(input.value.toLowerCase());
      input.value = '';
    }
  })
}

const changeButtonClasses = (button, otherBTNClass) => {
  button.classList.add('active');
  button.classList.remove('not-active');
  const other_btn = document.querySelector(`.${otherBTNClass}`);
  other_btn.classList.add('not-active');
  other_btn.classList.remove('active');
}
const unitsConverter = () => {
  const buttons = document.querySelectorAll('.unit');
  buttons.forEach(button => button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      return
    }
    if (button.classList.contains('metric')) {
      changeButtonClasses(button, 'imperial');
    } else if (button.classList.contains('imperial')) {
      changeButtonClasses(button, 'metric');
    }
  }))
}
unitsConverter();
searchCity();