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
    } else if (button.classList.contains('imperial')) {
      changeButtonClasses(button, 'metric');
      units = 'imperial';
    }
    console.log(units)
  }))
}
unitsConverter();
searchCity();

// .weather.id = id;
// .weather.icon = icon;
const id = '501'
const weatherImages = () => {
  if ([800].includes(id)) {
    return 'clear sky'
  } else if ([801].includes(id)) {
    return 'few clouds'
  } else if ([802].includes(id)) {
    return 'scattered clouds'
  } else if ([803, 804].includes(id)) {
    return 'broken clouds'
  } else if ([300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531].includes(id)) {
    return 'shower rain'
  } else if ([500, 501, 502, 503, 504].includes(id)) {
    return 'rain'
  } else if ([200, 201, 202,210, 211, 212, 221, 230, 231, 232].includes(id)) {
    return 'thunderstorm'
  } else if ([511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622].includes(id)) {
    return 'snow'
  } else if ([701, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(id)) {
    return 'mist'
  }
}
    
// setInterval(() => {const paragraph = <p>Current time: {dayjs().format('HH:mm:ss')}</p>; root.render(paragraph);})