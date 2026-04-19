
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
  const createCurrentWeatherDOM = (temp_word, temperature, weather_icon = Photo, condition, temp_min, temp_max, temperature_feels, humidity, pressure, visibility, wind_dir, Direct, wind_mph,  uv, dewpoint, girl) => {
    const day = document.querySelector('.day');
    const illustration = document.querySelector('.illustration');

    createP(day, 'CURRENT WEATHER');
    const info = createDiv(day, 'day-info');
    const info_left = createDiv(info, 'info-left');
    const temp = createP(info_left, `<span>${temperature}</span><sup>${temp_word}</sup>`);
    createIMG(info_left, weather_icon, 'weather-icon');
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
    createIMG(wind, Direct, 'wind-direction')
    createP(wind, `${wind_mph} m/s`);
    const uv_div = createDiv(day, 'uv');
    createP(uv_div, 'UV');
    createP(uv_div, uv);
    const dew = createDiv(day, 'dew');
    createP(uv_div, 'Dewpoint');
    createP(dew, `${dewpoint}${temp_word}`);
    createIMG(illustration, girl, 'girl');
  }
  const card = (date, img, name, temp, temp_word, hum, pressure) => {
    const forecast_div = document.querySelector('.forecast');
    const card = createDiv(forecast_div, 'card');
    createP(card, date);
    createIMG(card, img, name);
    createP(card, `${temp}${temp_word}`);
    createP(card, `${hum}%`);
    createP(card, `${pressure} hPa`);
  }
  const dateSwitch = (now, tomorrow_day, after_day) => {
    const div = document.querySelector('.weather'); 
    const date_switch = createDiv(div, 'date-switch');
    const today = createDiv(date_switch, 'switch current');
    today.innerHTML = `<p>${now}</p>`
    const tomorrow = createDiv(date_switch, 'switch');
    const day_after = createDiv(date_switch, 'switch');
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