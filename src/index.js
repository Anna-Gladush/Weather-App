import "./styles/style.css";
import { weatherTools } from "./weatherTools.js";
import { json, forecast_json, air_pollution } from "./openWeather.js";
import Photo from './assets/icons/weather/01d.svg';
import Direct from './assets/icons/direction/se.svg';
import girl from './assets/illustrations/clear.svg';
// import Photos from './assets/icons/weather/';

console.log(json);
console.log(new Date(json.dt));
console.log(forecast_json);
console.log(air_pollution);
console.log(weatherTools.windDirection('144'));
console.log(weatherTools.BeaufortScale('16'));


// const API = '06d88c219a26346c3631c659748fc09b';

const div = document.querySelector('.weather');
const day = document.querySelector('.day');
const illustration = document.querySelector('.illustration');


const createDiv = (parent, class_name) => {
  const div = document.createElement('div');
  div.className = class_name;
  parent.appendChild(div);
  return div;
}
const createP = (parent, text) => {
  const p = document.createElement('p');
  p.innerHTML = text;
  parent.appendChild(p);
  return p;
}
const createIMG = (parent, src, alt) => {
  const img = document.createElement("IMG");
  img.src = src;
  img.alt = alt;
  parent.appendChild(img);
  return img;
}
createP(day, 'CURRENT WEATHER')
const info = createDiv(day, 'day-info');
const info_left = createDiv(info, 'info-left');
const temp = createP(info_left, '23C');
createIMG(info_left, Photo, 'weather-icon')
const info_right = createDiv(info, 'info-right');
const weather_name = createP(info_right, 'Sunny');
const weather_temp = createP(info_right, '24 / 21');
const weather_desc = createP(info_right, 'Feels like 20');
const hum = createDiv(day, 'humility');
createP(hum, 'Humility');
createP(hum, '86%');
const pressure = createDiv(day, 'pressure');
createP(pressure, 'Pressure');
createP(pressure, '1013 hPa');
const vis = createDiv(day, 'visibility');
createP(vis, 'Visibility');
createP(vis, '10km');
const wind = createDiv(day, 'wind');
createP(wind, 'SE');
createP(wind, '7 km/h');
createIMG(wind, Direct, 'wind-direction')

createIMG(illustration, girl, 'girl')

const forecast_div = document.querySelector('.forecast');

const card = (date, img, name, temp, hum, pressure) => {
  const card = createDiv(forecast_div, 'card');
  createP(card, date);
  createIMG(card, img, name);
  createP(card, temp);
  createP(card, hum);
  createP(card, pressure);
}

for (let i = 5; i > 0; i--) {
      card('11 April', Photo, 'weather-icon', '20 / 25', '86%', '1013hPa');
    }