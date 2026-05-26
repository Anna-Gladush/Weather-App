const CurrentWeatherForecast = ({ code, temp_word, temp, min, max, condition, feelslike, humidity, pressure, visibility, dir, wind, uv, dewpoint}) => {
  
  return (
    <>
      <div className="day">
        <p>CURRENT WEATHER {code}</p>
        <div className="day-info">
          <div className="info-left">
            <span>{temp}</span><sup>°{temp_word}</sup>
            {/* <img className="weather" src="" alt="current weather icon" /> //weather image */}
          </div>
          <div className="info-right">
            <p>{condition}</p>
            <p>{min}°{temp_word} / ${max}°{temp_word}</p>
            <p>Feels like {feelslike}°{temp_word}</p>
          </div>
        </div>
        <div className="info-bottom">
          <div className="humidity">
            <p>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="pressure">
            <p>Prerssure</p>
            <p>{pressure} hPa</p>
          </div>
          <div className="visibility">
            <p>Visibility</p>
            <p>{visibility} km</p>
          </div>
          <div className="wind">
            <p>{dir}</p>
            {/* <img className="direction" src="" alt="wind direction icon" /> */}
            <p>{Math.floor(wind * 1000/ 3600)} m/s</p>
          </div>
          <div className="uv">
            <p>UV</p>
            <p>{uv}</p>
          </div>
          <div className="dew">
            <p>Dewpoint</p>
            <p>{dewpoint}°{temp_word}</p>
          </div>
        </div>
      </div>
      <div className="illustration">
        {/* <img alt="" src=""> */}
      </div>
    </>
  )
}

  export default CurrentWeatherForecast