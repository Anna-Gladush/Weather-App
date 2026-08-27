import type { JSX } from 'react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useWeather } from "./components/useWeather";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Card from "./components/Card";
import { weatherIcon, illustration } from './code';
import Loader from './components/Loader';
import Map from './components/Map'
import Alert from './components/Alert';
import 'react-tooltip/dist/react-tooltip.css'
import { useTranslation } from 'react-i18next';



let initial = false;

const App = (): JSX.Element => {
  const { data, loading, error, fetchWeather } = useWeather();
  const [currentTime, setCurrentTime] = useState(new Date())
  const [temperatureUnit, setTemperatureUnit] = useState('C');
  const [query, setQuery] = useState('');
  const [date, setDate] = useState(0)
  const [activeView, setActiveView] = useState("weather")
  const { i18n, t } = useTranslation("translation")
  
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }

  const changeView = () => {
    setActiveView(activeView === "weather" ? "map" : "weather")
  }

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

  const wheelHandler = (e) => {
    const container = document.querySelector('.forecast');
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY > 0 ? 100 : -100 ;
    }
  }

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

  if (loading) return (
  <div className='background' style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
    <Loader/>
  </div>
)

  if (error) return (
    <div className='background' style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
      <p>{error}</p>
    </div>
  )

  return (
    <div className='background'>
      <Header city={data !== null ? `${data.location.name}, ${data.location.country}` : ""} temperatureUnit={temperatureUnit} handleUnitChange={handleUnitChange} time={format(currentTime, 'HH:mm')}
      handleSearch={handleSearch} query={query} setQuery={setQuery} loading={loading} handleChangeLanguage={handleChangeLanguage}/>
      
      <div className='view'>
        { data && 
        (activeView === "weather" && 
        <>
          <CurrentWeather
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
        aqi={data.current.air_quality['us-epa-index']}
        illustration={illustration(weatherIcon(data.current.condition.code, data.current.is_day))}/>
        <button onClick={changeView} title={"view map"} className='change-view'>{">"}</button>
        </>
        )        
        ||
      (activeView === "map" && 
      <>
      <button onClick={changeView} className='change-view' title={"view current weather"}>{"<"}</button>
      <Map position={[data.location.lat, data.location.lon]} zoom={13} city={data.location.name} country={data.location.country} temp={temperatureUnit === 'C' ? data.current.temp_c :  data.current.temp_f} temperatureUnit={temperatureUnit} />
      </>)
      
      }
      </div>
      
      
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
          <div className='forecast' onWheel={(e) => wheelHandler(e)}>
          {data.forecast.forecastday[date].hour.map(
            hour => {
              if (format(hour.time, "HH") < format(data.location.localtime, "HH") && format(new Date(hour.time), "dd") === format(new Date(), "dd")) return
              return (
                <Card 
                date={format(new Date(hour.time), "H:mm")} 
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
        {data && data.alerts.alert.length > 0 && 
          (<Alert alerts={data.alerts.alert}/>)
        }
    </div>
  )
}

export default App;