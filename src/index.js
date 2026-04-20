import "./styles/style.css";
import { format } from "date-fns";
import { createDOM } from "./createDOM.js";
import { forecast } from "./weather-api.js";
import { getImages } from "./importImages.js"
import { loadImages } from "./asyncLoadImage.js";
// I HATE WEBPACK

const div = document.querySelector('.weather');

// JSON
const json = forecast;
const current = json.current;
const forecast_json = json.forecast;
// Background
const weather_code = current.condition.code;
const is_day = current.is_day;

const code = getImages.weatherIcon(weather_code, is_day)
const imagesPaths = getImages.weatherBackgroundAndIllustration(code, is_day)
// console.log(imagesPaths.icon, imagesPaths.background)
loadImages('background', imagesPaths.background)

// Variables
const location = `${json.location.name}, ${json.location.region}`;
document.getElementById('city').textContent = location;

// CURRENT
const temp_c = current.temp_c;
const temp_f = current.temp_f;
const feelslike_c = current.feelslike_c;
const feelslike_f = current.feelslike_f;
const condition = current.condition.text;

const wind_mph = current.wind_mph;
const wind_dir = current.wind_dir;

const pressure = current.pressure_mb;
const humidity = current.humidity;
const dewpoint_c = current.dewpoint_c;
const dewpoint_f = current.dewpoint_f;

const visibility = current.vis_km;
const uv = current.uv;

const maxtemp_c = forecast_json.forecastday[0].day.maxtemp_c;
const mintemp_c = forecast_json.forecastday[0].day.mintemp_c;
const maxtemp_f = forecast_json.forecastday[0].day.maxtemp_f;
const mintemp_f = forecast_json.forecastday[0].day.mintemp_f;


// FORECAST
const createDateDivs = () => {
  let id = 0;
  forecast_json.forecastday.forEach(day => {
    createDOM.dateSwitch(format(new Date(day.date), "d MMMM"), id);
    id ++;
  })
  forecastDateSwitch();
}

const forecast_condition = (array_num, temp_word) => {
  document.querySelector('.forecast').innerHTML = '';
  forecast_json.forecastday[array_num].hour.forEach(weather => {
  const day_code = weather.condition.code;
  const day = weather.is_day;
  const code = getImages.weatherIcon(day_code, day)
  const imagesPaths = getImages.weatherBackgroundAndIllustration(code, day)
  console.log(imagesPaths.icon)
  const time = format(new Date(weather.time), 'HH:mm');
  const hum = weather.humidity;
  const pre = weather.pressure_mb;
  if (temp_word === '°C') {
    let temperature = weather.temp_c;
    createDOM.card(time, imagesPaths.icon, temperature, temp_word, hum, pre);
  } else if (temp_word === '°F') {
    let temperature = weather.temp_f;
    createDOM.card(time, imagesPaths, temperature, temp_word, hum, pre);
  }
})}

// console.log(forecast_json.forecastday[0].hour)

const searchCity = () => {
  const input = document.getElementById('search-city');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log(input.value.toLowerCase());
      input.value = '';
    }
  })
}

let units = 'metric';
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
      units = 'metric';
      
      div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="date-switch"></div><div class="forecast"></div>';
      // createDOM.createCurrentWeatherDOM('°C', temp_c, Photo, condition, mintemp_c, maxtemp_c, feelslike_c, humidity, pressure, visibility, wind_dir, Direct, wind_mph, uv, dewpoint_c, girl);
      forecast_condition(0, '°C')
    } else if (button.classList.contains('imperial')) {
      changeButtonClasses(button, 'metric');
      units = 'imperial';

      div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="date-switch"></div><div class="forecast"></div>';
      // createDOM.createCurrentWeatherDOM('°F', temp_f, Photo, condition, mintemp_f, maxtemp_f, feelslike_f, humidity, pressure, visibility, wind_dir, Direct, wind_mph, uv, dewpoint_f, girl);     
      forecast_condition(0, '°F')
    }
    createDateDivs()
  }))
}

const forecastDateSwitch = () => {
  const divs = document.querySelectorAll('.switch');

  divs.forEach(div => div.addEventListener('click', () => {
    if (div.classList.contains('current')) {
      return;
    }
    const current = document.querySelector('.current');
    current.classList.remove('current');
    div.classList.add('current');
    const id = div.id;
    const unit = document.querySelector('.unit.active')
    const temp_word = unit.classList.contains('metric') ? '°C' : '°F';
    forecast_condition(id, temp_word)
  }))
}


unitsConverter();
searchCity();


// const imagesPaths = getImages.weatherBackgroundAndIllustration(code, is_day)
// console.log(imagesPaths.icon, imagesPaths.background)

async function createCurrentWeather() {
  console.log(imagesPaths.illustration)

  const weather_icon = imagesPaths.icon;
  const girl_illustration = imagesPaths.illustration;
  const direction_icon = getImages.windDirection(wind_dir);
  createDOM.createCurrentWeatherDOM('°C', temp_c, weather_icon, condition, mintemp_c, maxtemp_c, feelslike_c, humidity, pressure, visibility, wind_dir, direction_icon, wind_mph, uv, dewpoint_c, girl_illustration);
  createDateDivs()
  forecast_condition(0, '°C');

}
createCurrentWeather()





    
// setInterval(() => {const paragraph = <p>Current time: {dayjs().format('HH:mm:ss')}</p>; root.render(paragraph);})
