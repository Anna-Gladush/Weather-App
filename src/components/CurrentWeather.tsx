const CurrentWeather = ({ code, temperatureUnit, temp, min, max, condition, feelslike, humidity, pressure, visibility, direction, wind_km, uv, dewpoint, illustration}) => {
  return (
    <>
    <div className="today">
      <div className="day">
        <p>CURRENT</p>
        <div className="day-info">
          <div className="info-left">
            <span>{temp}</span><sup>°{temperatureUnit}</sup>
            <img src={`/icons/weather/${code}.svg`} alt="current weather icon" />
          </div>
          <div className="info-right">
            <p>{condition}</p>
            <p>{min}°...{max}°{temperatureUnit}</p>
            <p>Feels like {feelslike}°{temperatureUnit}</p>
          </div>
        </div>
        <div className="info-bottom">
          <div className="humidity">
            <p>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="pressure">
            <p>Prerssure</p>
            <p>{pressure} {temperatureUnit === "C" ? "mmHg" : "hPa"}</p>
          </div>
          <div className="visibility">
            <p>Visibility</p>
            <p>{visibility} km</p>
          </div>
          <div className="wind">
            <p>{direction}</p>
            <img src={`/icons/direction/${direction.toLowerCase()}.svg`} alt="wind direction icon" />         
            <p>{Math.floor(wind_km * 1000/ 3600)} m/s</p>
          </div>
          <div className="uv">
            <p>UV</p>
            <p>{uv}</p>
          </div>
          <div className="dew">
            <p>Dewpoint</p>
            <p>{dewpoint}°{temperatureUnit}</p>
          </div>
        </div>
      </div>
      <div className="illustration">
        <img alt="" src={`/illustrations/${illustration}.svg`} />
      </div>
    </div>
    </>
  )
}

export default CurrentWeather;