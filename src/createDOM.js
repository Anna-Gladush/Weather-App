import { loadImages } from "./asyncLoadImage.js";

const createDOM = (() => {
  let i = 0;
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
  const createCurrentWeatherDOM = (temp_word, temperature, weather_icon, condition, temp_min, temp_max, temperature_feels, humidity, pressure, visibility, wind_dir, direction, wind_mph,  uv, dewpoint, girl) => {
    const day = document.querySelector('.day');

    createP(day, 'CURRENT WEATHER');
    const info = createDiv(day, 'day-info');
    const info_left = createDiv(info, 'info-left');
    const temp = createP(info_left, `<span>${temperature}</span><sup>${temp_word}</sup>`);
    loadImages('weather', weather_icon, document.querySelector('.info-left'))
    const info_right = createDiv(info, 'info-right');
    const weather_name = createP(info_right, condition);
    const weather_temp = createP(info_right, `${temp_min}${temp_word} / ${temp_max}${temp_word}`);
    const weather_desc = createP(info_right, `Feels like ${temperature_feels}${temp_word}`);
    const info_bottom = createDiv(day, 'info-bottom')
    const hum = createDiv(info_bottom, 'humidity');
    createP(hum, 'Humidity');
    createP(hum, `${humidity}%`);
    const pressure_div = createDiv(info_bottom, 'pressure');
    createP(pressure_div, 'Pressure');
    createP(pressure_div, `${pressure} hPa`);
    const vis = createDiv(info_bottom, 'visibility');
    createP(vis, 'Visibility');
    createP(vis, `${visibility} km`);
    const wind = createDiv(info_bottom, 'wind');
    loadImages('direction', direction, document.querySelector('.wind'));
    createP(wind, wind_dir);
    createP(wind, `${wind_mph} m/s`);
    const uv_div = createDiv(info_bottom, 'uv');
    createP(uv_div, 'UV');
    createP(uv_div, uv);
    const dew = createDiv(info_bottom, 'dew');
    createP(dew, 'Dewpoint');
    createP(dew, `${dewpoint}${temp_word}`);
    loadImages('illustration', girl, document.querySelector('.illustration'));
  }
  async function card(date, imagesPaths, temp, temp_word, hum, pressure) {
    i++;
    const forecast_div = document.querySelector('.forecast');
    const card = createDiv(forecast_div, `card card-${i}`);
    createP(card, date);
    await loadImages('weather', imagesPaths, document.querySelector(`.card-${i}`))
    createP(card, `${temp}${temp_word}`);
    createP(card, `${hum}%`);
    createP(card, `${pressure} hPa`);
  }

  const dateSwitch = (day, num) => {
    const div = document.querySelector('.date-switch'); 
    const current = createDiv(div, 'switch');
    if (num === 0) {
      current.classList.add('current')
    }
    current.innerHTML = `<p>${day}</p>`;
    current.id = num;
  }
  return {
    createDiv,
    createIMG,
    createP,
    createCurrentWeatherDOM,
    card,
    dateSwitch
  }
})()
export { createDOM }