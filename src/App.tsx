import type { JSX } from 'react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useWeather } from "./components/useWeather";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Card from "./components/Card";
import { weatherIcon } from './code';

let initial = false;

const App = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [temperatureUnit, setTemperatureUnit] = useState('C');
  const [query, setQuery] = useState('');
  const [date, setDate] = useState(0)
  const { data, loading, error, fetchWeather } = useWeather();

  const handleUnitChange = (type: string): void => {
    setTemperatureUnit(type === 'imperial' ?  'F': 'C');
  }

  const handleDateChange = (e, date) => {
    const btns = document.querySelectorAll(".date");
    btns.forEach(btn => {
      btn.classList.remove("current");
      if (btn.textContent === date) {
        btn.classList.add("current");
        const index = btn.classList[1]
        setDate(Number(index));
      }
    })
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) fetchWeather(query.trim());
    console.log(data)
  };

  // Initial weather, from ip
  useEffect(() => {
    if (!initial) {
      fetch(`http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,query`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Couldn't fetch adress")
          }
          return response.json();
        })
        .then((response) => {
          fetchWeather(response.city);
          
       })
        .catch((error) => {
          console.log(error)
       })
        .finally(() => {
          initial = true;
       })
    }
  }, [])

  useEffect(() => {
    // Current time
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);


  if (loading) return <p>Loading...</p>

  return (
    <div className='background'>
      <Header city={data !== null ? data.location.name : ""} temperatureUnit={temperatureUnit} handleUnitChange={handleUnitChange} time={format(currentTime, 'HH:mm')}
      handleSearch={handleSearch} query={query} setQuery={setQuery} loading={loading}/>
      { data && <CurrentWeather
        code={weatherIcon(data.current.condition.code, data.current.is_day)} 
        temperatureUnit={temperatureUnit} 
        temp={temperatureUnit === 'C' ? data.current.temp_c :  data.current.temp_f}
        min={temperatureUnit === 'C' ? data.forecast.forecastday[0].day.mintemp_c : data.forecast.forecastday[0].day.mintemp_f}
        max={temperatureUnit === 'C' ? data.forecast.forecastday[0].day.maxtemp_c : data.forecast.forecastday[0].day.maxtemp_f}
        condition={data.current.condition.text}
        feelslike={temperatureUnit === 'C' ? data.current.feelslike_c :  data.current.feelslike_f}
        humidity={data.current.humidity}
        pressure={temperatureUnit === 'C' ? (Math.round(data.current.pressure_mb *  0.75)) : data.current.pressure_mb}
        visibility={data.current.vis_km}
        direction={data.current.wind_dir}
        wind_km={data.current.wind_kph}
        uv={data.current.uv}
        dewpoint={temperatureUnit === 'C' ? data.current.dewpoint_c :  data.current.dewpoint_f}
      />}

          {data && (
            <div className="date-buttons">
            { data.forecast.forecastday.map((day, id) => {
              const new_day = format(new Date(day.date), "d MMMM")
              const current = format(new Date(data.forecast.forecastday[0].date), "d MMMM") === new_day ? 'date current 0' : `date ${id}`
            return (
              <button className={current} key={day.date} onClick={(e) => handleDateChange(e, new_day)}>{new_day}</button>
            )

          })}
        </div>)}

        {data && (
          <div className='forecast'>
          {data.forecast.forecastday[date].hour.map(
            hour => {
              return (
                <Card 
                date={hour.time} 
                temp={temperatureUnit === 'C' ? hour.temp_c : hour.temp_f} 
                temperatureUnit={temperatureUnit}
                humidity={hour.humidity}
                pressure={temperatureUnit === 'C' ? (Math.round(hour.pressure_mb *  0.75)) : hour.pressure_mb}
                code={weatherIcon(hour.condition.code, hour.is_day)}
                key={hour.time}
                />
              )
            }
        )}
        </div>)}
    </div>
  )
}

export default App;