/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import Header from './components/Header';
import Spinner from './components/Spinner'
import { useEffect, useState } from 'react';
import CurrentWeatherForecast from './components/currentWeather'
import Card from './components/forecast'
import weather_data from './data/weather-data.json'

// const WEATHER_API = import.meta.env.WEATHER_API;
// const WEATHER_API = process.env.WEATHER_API;
const API_BASE_URL = 'https://api.weatherapi.com/v1';


const App = () => {
  const [currentWeather, setCurrentWeather] = useState(weather_data.current);
  const [forecast, setForecast] = useState(weather_data.forecast);
  const [tempword, setTempword] = useState('C')
  const [date, setDate] = useState(1)
  // const [currentForecast, setCurrentForecast] = useState([]);
  const [inputCity, setInputCity] = useState('Honolulu')
  const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

// https://github.com/weatherapicom/weatherapi-examples/blob/main/javascript/current.js
  const getWeatherData = async (inputCity) => {
    setIsLoading(true);
      const params = new URLSearchParams({
        key: '5a4f775d97004809801123746261604',
        q: inputCity,
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
        setCurrentWeather(data.current || [])
        setForecast(data.forecast || [])
      } catch(error) {
        console.log(`Error fetching weather data: ${error}`);
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

// useEffect(() => {
//   getWeatherData(inputCity)
// }, [inputCity])
// const min = weather_data.forecast.forecastday[0].day.mintemp_c
// const max = weather_data.forecast.forecastday[0].day.maxtemp_c
  return (
    <>
    <Header city={inputCity}/>
      <main>
        <CurrentWeatherForecast
          code={currentWeather.condition.code} 
          temp_word={tempword} 
          temp={tempword === 'C' ? currentWeather.temp_c :  currentWeather.temp_f}
          min={tempword === 'C' ? forecast.forecastday[0].day.mintemp_c : forecast.forecastday[0].day.mintemp_f}
          max={tempword === 'C' ? forecast.forecastday[0].day.maxtemp_c : forecast.forecastday[0].day.maxtemp_f}
          condition={currentWeather.condition.text}
          feelslike={tempword === 'C' ? currentWeather.feelslike_c :  currentWeather.feelslike_f}
          humidity={currentWeather.humidity}
          pressure={currentWeather.pressure_mb}
          visibility={currentWeather.vis_km}
          dir={currentWeather.wind_dir}
          wind={currentWeather.wind_kph}
          uv={currentWeather.uv}
          dewpoint={tempword === 'C' ? currentWeather.dewpoint_c :  currentWeather.dewpoint_f}
        />
        
        <div className="forecast">
          {forecast.forecastday[date].hour.map(
            hour => {
              return (
                <Card 
                date={hour.time} 
                temp={tempword === 'C' ? hour.temp_c : hour.temp_f} 
                temp_word={tempword}
                humidity={hour.humidity}
                pressure={hour.pressure_mb}
                />
              )
            }
        )}
        </div>
      </main>
    </>
  )
}

export default App