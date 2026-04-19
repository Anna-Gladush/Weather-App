import "./styles/style.css";
import { format } from "date-fns";
import { createDOM } from "./createDOM.js";
import { forecast } from "./weather-api.js";
import Photo from './assets/icons/weather/01d.svg';
import Direct from './assets/icons/direction/se.svg';
import girl from './assets/illustrations/clear.svg';

const div = document.querySelector('.weather');
// Variables

const json = forecast;

const location = `${json.location.name}, ${json.location.region}`;
document.getElementById('city').textContent = location;

const current = json.current;
const forecast_json = json.forecast;

const temp_c = current.temp_c;
const temp_f = current.temp_f;
const feelslike_c = current.feelslike_c;
const feelslike_f = current.feelslike_f;
const condition = current.condition.text;
const icon = current.condition.icon;

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

createDOM.createCurrentWeatherDOM('°C', temp_c, Photo, condition, mintemp_c, maxtemp_c, feelslike_c, humidity, pressure, visibility, wind_dir, Direct, wind_mph, uv, dewpoint_c, girl);


// FORECAST
forecast_json.forecastday.forEach(day => {
  console.log(format(new Date(day.date), 'E'));
  console.log(format(new Date(day.date), "d MMMM"));

  // console.log(day.astro);
})

// console.log(forecast_json.forecastday[0].hour);

const forecast_condition = forecast_json.forecastday[0].hour.forEach(weather => {
  console.log(weather.condition);
  const time = format(new Date(weather.time), 'HH:mm');
  const temp_c = weather.temp_c;
  const temp_f = weather.temp_f;
  const hum = weather.humidity;
  const pre = weather.pressure_mb;
  createDOM.card(time, Photo, 'weather-icon', temp_c, '°C', hum, pre);
})

console.log(forecast_json.forecastday[0].hour)

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

      div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="forecast"></div>';
      createDOM.createCurrentWeatherDOM('°C', temp_c, Photo, condition, mintemp_c, maxtemp_c, feelslike_c, humidity, pressure, visibility, wind_dir, Direct, wind_mph, uv, dewpoint_c, girl);
      for (let i = 8; i > 0; i--) {
        createDOM.card('11 April', Photo, 'weather-icon', mintemp_c, maxtemp_c, '86%', '1013hPa');
      }
    } else if (button.classList.contains('imperial')) {
      changeButtonClasses(button, 'metric');
      units = 'imperial';

      div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="forecast"></div>';
      createDOM.createCurrentWeatherDOM('°F', temp_f, Photo, condition, mintemp_f, maxtemp_f, feelslike_f, humidity, pressure, visibility, wind_dir, Direct, wind_mph, uv, dewpoint_f, girl);
      for (let i = 8; i > 0; i--) {
        createDOM.card('11 April', Photo, 'weather-icon', mintemp_f, maxtemp_f, '86%', '1013hPa');
      }
    }
  }))
}
unitsConverter();
searchCity();

// .weather.id = id;
// .weather.icon = icon;
// const id = '501'
// const weatherImages = () => {
//   if ([800].includes(id)) {
//     return 'clear sky'
//   } else if ([801].includes(id)) {
//     return 'few clouds'
//   } else if ([802].includes(id)) {
//     return 'scattered clouds'
//   } else if ([803, 804].includes(id)) {
//     return 'broken clouds'
//   } else if ([300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531].includes(id)) {
//     return 'shower rain'
//   } else if ([500, 501, 502, 503, 504].includes(id)) {
//     return 'rain'
//   } else if ([200, 201, 202,210, 211, 212, 221, 230, 231, 232].includes(id)) {
//     return 'thunderstorm'
//   } else if ([511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622].includes(id)) {
//     return 'snow'
//   } else if ([701, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(id)) {
//     return 'mist'
//   }
// }
    
// setInterval(() => {const paragraph = <p>Current time: {dayjs().format('HH:mm:ss')}</p>; root.render(paragraph);})

// import Photos from './assets/icons/weather/';
