import "./styles/style.css";
import { Weather } from "./weatherClass.js";

async function init() {
  let city = 'Istanbul';
  let weather;
  weather = await Weather.createForecast(city);
  weather.createCurrentWeather('°C');
}
async function search(e) {
  const input = document.getElementById('search-city');
  const button = document.querySelector('.unit.active');
  if (e.key === 'Enter') {
    const city = input.value.trim().toLowerCase();
    input.value = '';
    const weather = await Weather.createForecast(city);
    const unit = button.classList.contains('metric') ? '°C' : '°F';
    weather.createCurrentWeather(unit);
  }
}
async function searchCityInput() {
  const input = document.getElementById('search-city');
  input.addEventListener('keydown', (e) => {search(e)})}

// JSON

init()
searchCityInput()