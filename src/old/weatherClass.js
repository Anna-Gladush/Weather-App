import { format } from "date-fns";
import { createDOM } from "./createDOM.js";
import { getImages } from "./importImages.js"
import { loadImages } from "./asyncLoadImage.js";
import { getWeatherData } from "./weather-api.js";
// I HATE WEBPACK

class Weather {
  constructor(json) {
    this.json = json;
    this.current = json.current;
    this.forecast_json = json.forecast;
    this.forecastday = json.forecast.forecastday
    const is_day = json.current.is_day;
    const code = getImages.weatherIcon(json.current.condition.code, is_day)
    this.imagesPaths = getImages.weatherBackgroundAndIllustration(code, is_day)
    this.id = 0;
  }
  static async createForecast(city){
    const json = await getWeatherData(city);
    return new Weather(json);
  } 

  forecast_condition = (array_num, temp_word) => {
    document.querySelector('.forecast').innerHTML = '';
    this.forecastday[array_num].hour.forEach(weather => {
    const day_code = weather.condition.code;
    const day = weather.is_day;
    const code = getImages.weatherIcon(day_code, day)
    const imagesPaths = getImages.weatherBackgroundAndIllustration(code, day)
    const time = format(new Date(weather.time), 'HH:mm');
    const hum = weather.humidity;
    const pre = weather.pressure_mb;
    if (temp_word === '°C') {
      let temperature = weather.temp_c;
      createDOM.card(time, imagesPaths.icon, temperature, temp_word, hum, pre);
    } else if (temp_word === '°F') {
      let temperature = weather.temp_f;
      createDOM.card(time, imagesPaths.icon, temperature, temp_word, hum, pre);
    }
  })}

  createDateDivs() {
    this.id = 0;
    this.forecastday.forEach(day => {
      createDOM.dateSwitch(format(new Date(day.date), "d MMMM"), this.id);
      this.id ++;
    })
    this.forecastDateSwitch();
  }

  async createCurrentWeather(temp_word) {
    const { temp_c, temp_f, feelslike_c, feelslike_f, condition, wind_mph, wind_dir, pressure_mb, humidity, dewpoint_c, dewpoint_f, vis_km, uv} = this.current;
    const {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f} = this.forecastday[0].day;
    const location = `${this.json.location.name}`;
    document.getElementById('city').textContent = location;
    loadImages('background', this.imagesPaths.background);

    const div = document.querySelector('.weather');
    div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="date-switch"></div><div class="forecast"></div>';
    const weather_icon = this.imagesPaths.icon;
    const girl_illustration = this.imagesPaths.illustration;
    const direction_icon = getImages.windDirection(wind_dir);
    if (temp_word === '°C'){
    createDOM.createCurrentWeatherDOM('°C', temp_c, weather_icon, condition.text, mintemp_c, maxtemp_c, feelslike_c, humidity, pressure_mb, vis_km, wind_dir, direction_icon, wind_mph, uv, dewpoint_c, girl_illustration);
    } else if (temp_word === '°F') {
      createDOM.createCurrentWeatherDOM('°F', temp_f, weather_icon, condition.text, mintemp_f, maxtemp_f, feelslike_f, humidity, pressure_mb, vis_km, wind_dir, direction_icon, wind_mph, uv, dewpoint_f, girl_illustration);
    }
    this.createDateDivs()
    this.forecast_condition(0, temp_word);
    this.unitsConverter();
  }

  changeButtonClasses = (button, otherBTNClass) => {
    button.classList.add('active');
    button.classList.remove('not-active');
    const other_btn = document.querySelector(`.${otherBTNClass}`);
    other_btn.classList.add('not-active');
    other_btn.classList.remove('active');
  }

  unitsConverter = () => {
    const div = document.querySelector('.weather');
    let units = 'metric';
    const buttons = document.querySelectorAll('.unit');
    // Delete previous eventListeners = fixes the problem: when clicking on buttons the previous json was used;
    buttons.forEach(button => {
      const new_btn = button.cloneNode(true);
      button.replaceWith(new_btn);
    });
    document.querySelectorAll('.unit').forEach(button => button.addEventListener('click', () => {
      if (button.classList.contains('active')) {
        return
      }
      if (button.classList.contains('metric')) {
        this.changeButtonClasses(button, 'imperial');
        units = 'metric';
        
        div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="date-switch"></div><div class="forecast"></div>';
        console.log(this.current)
        this.createCurrentWeather('°C')
      } else if (button.classList.contains('imperial')) {
        this.changeButtonClasses(button, 'metric');
        units = 'imperial';
        console.log(this.current)

        div.innerHTML = '<div class="today"><div class="day"></div><div class="illustration"></div></div><div class="date-switch"></div><div class="forecast"></div>';
        this.createCurrentWeather('°F')
      }
    }))
  }

  forecastDateSwitch = () => {
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
      this.forecast_condition(id, temp_word)
    }))
  }
}
export { Weather }