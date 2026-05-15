import Header from './components/Header';
import Spinner from './components/Spinner'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import weather_data from './data/weather-data.json'

const WEATHER_API = import.meta.env.WEATHER_API;
const API_BASE_URL = 'https://api.weatherapi.com/v1';


const App = () => {
  const [currentWeather, setCurrentWeather] = useState(weather_data);
  // const [currentForecast, setCurrentForecast] = useState([]);
  const [inputCity, setInputCity] = useState('Honolulu')
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

// https://github.com/weatherapicom/weatherapi-examples/blob/main/javascript/current.js
  // eslint-disable-next-line no-unused-vars
  const getWeatherData = async (city) => {
    setIsLoading(true);

    const params = new URLSearchParams({
      key: WEATHER_API,
      q: city,
      days: 3,
      aqi: 'yes',
      alerts: 'yes'
    })

    try {
      const response = await fetch(`${API_BASE_URL}/forecast.json?${params}`);

      if (!response.ok) {
        throw new Error(`Failed fetching weather data. Response status: ${response.status}`)
      }

      const data = await response.json();
      // CHANGE DATA
      setCurrentWeather(data || [])

    } catch(error) {
      console.log(`Error fetching weather data: ${error}`);
      setErrorMessage('Failed fetching weather data');
    } finally {
      setIsLoading(false)
    }
  }
  // eslint-disable-next-line no-unused-vars
  const searchCityInput = async () => {
    const input = document.getElementById('search-city');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const city = input.value.trim().toLowerCase();
        setInputCity(city)
        input.value = '';
      }
    })
    // async function search(e) {
    //   const input = document.getElementById('search-city');
    //   const button = document.querySelector('.unit.active');
    //   if (e.key === 'Enter') {
    //     const city = input.value.trim().toLowerCase();
    //     input.value = '';
    //     const weather = await Weather.createForecast(city);
    //     const unit = button.classList.contains('metric') ? '°C' : '°F';
    //     weather.createCurrentWeather(unit);
    //   }
    // }
  }

// useEffect(() => getWeatherData(inputCity), [inputCity])
  return (
    <>
    <Header city={inputCity}/>
    <main>
    {isLoading ? (<Spinner />) : errorMessage ? (<p >{errorMessage}</p>) : (<div>{currentWeather}</div>)}
    </main>
    </>
  )
}

export default App