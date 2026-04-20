// import { loadImages } from './index.js';
const createDOM = (() => {
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
    const illustration = document.querySelector('.illustration');

    createP(day, 'CURRENT WEATHER');
    const info = createDiv(day, 'day-info');
    const info_left = createDiv(info, 'info-left');
    const temp = createP(info_left, `<span>${temperature}</span><sup>${temp_word}</sup>`);
    info_left.appendChild(weather_icon);
    const info_right = createDiv(info, 'info-right');
    const weather_name = createP(info_right, condition);
    const weather_temp = createP(info_right, `${temp_min}${temp_word} / ${temp_max}${temp_word}`);
    const weather_desc = createP(info_right, `Feels like ${temperature_feels}${temp_word}`);
    const hum = createDiv(day, 'humidity');
    createP(hum, 'Humidity');
    createP(hum, `${humidity}%`);
    const pressure_div = createDiv(day, 'pressure');
    createP(pressure_div, 'Pressure');
    createP(pressure_div, `${pressure} hPa`);
    const vis = createDiv(day, 'visibility');
    createP(vis, 'Visibility');
    createP(vis, `${visibility} km`);
    const wind = createDiv(day, 'wind');
    createP(wind, wind_dir);
    wind.appendChild(direction);
    createP(wind, `${wind_mph} m/s`);
    const uv_div = createDiv(day, 'uv');
    createP(uv_div, 'UV');
    createP(uv_div, uv);
    const dew = createDiv(day, 'dew');
    createP(dew, 'Dewpoint');
    createP(dew, `${dewpoint}${temp_word}`);
    illustration.appendChild(girl);
  }
  const card = (date, img, temp, temp_word, hum, pressure) => {
    const forecast_div = document.querySelector('.forecast');
    const card = createDiv(forecast_div, 'card');
    createP(card, date);
    card.appendChild(img);
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