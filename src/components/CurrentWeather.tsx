import { Tooltip } from "react-tooltip";

const CurrentWeather = ({ code, temperatureUnit, temp, min, max, condition, feelslike, humidity, pressure, visibility, direction, wind_km, uv, dewpoint, aqi, illustration}) => {

  const aqi_labels = ['', 'Good', 'Moderate', 'Unhealthy (Sensitive)', 'Unhealthy', 'Very Unhealthy', 'Hazardous'];
  const uv_labels = {low: "Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 15+ sunscreen. Bright surfaces, sand, water, and snow, will increase UV exposure.", moderate: "Stay in shade near midday, when the sun is strongest. If outdoors, wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 50+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.", high: "Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 50+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.", veryHigh: "Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 50+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.", extreme: "Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 50+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure."}
  const aqiInfo = aqi_labels[aqi];
  const wind = Math.floor(wind_km * 1000/ 3600)
  return (
    <>
    <div className="today">
      <div className="day">
        <p className="current-title">CURRENT</p>
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
            <p style={{fontWeight: "bold"}}>Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="pressure">
            <p style={{fontWeight: "bold"}}>Prerssure <a data-tooltip-id="pressure-tooltip" data-tooltip-content="Mean sea-level pressure." className="mark">?</a></p>
            <Tooltip 
            id="pressure-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{pressure} {temperatureUnit === "C" ? "mmHg" : "hPa"}</p>
          </div>
          <div className="visibility">
            <p style={{fontWeight: "bold"}}>Visibility <a data-tooltip-id="visibility-tooltip" data-tooltip-content="The greatest distance under given weather conditions to which it is possible to see without instrumental assistance." className="mark">?</a> </p>
            <Tooltip 
            id="visibility-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{visibility} km</p>
          </div>
          <div className="wind">
            <p style={{fontWeight: "bold"}}>{wind < 2.2 ? "Light Air" : (wind < 3.7 ? "Light Breeze" : (wind < 5.8 ? "Gentle Breeze" : (wind < 8.9 ? "Moderate Breeze" : (wind < 11.2 ? "Fresh Breeze" : "Strong Breeze"))))}</p>
            <div style={{display: "flex", alignItems:"center", gap: "10px"}}>
              <p>{direction}</p>
              <img src={`/icons/direction/${direction.toLowerCase()}.svg`} alt="wind direction icon" /> 
            </div>
            <p>{wind} m/s</p>
          </div>
          <div className="air-quality">
            <p style={{fontWeight: "bold"}}>Air Quility <a data-tooltip-id="air-quality-tooltip" data-tooltip-content="Air Quality Index, or AQI, is the system used to warn the public when air pollution is dangerous." className="mark">?</a> </p>
            <Tooltip 
            id="air-quality-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{aqiInfo}</p>
          </div>
          <div className="dew">
            <p style={{fontWeight: "bold"}}>Dewpoint <a data-tooltip-id="dewpoint-tooltip" data-tooltip-content="Dew point is the temperature at which air becomes saturated with water vapor and dew or frost forms." className="mark">?</a> </p>
            <Tooltip 
            id="dewpoint-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{dewpoint}°{temperatureUnit}</p>
          </div>      
          </div>        
        </div>
          <div className="uv">
            <p style={{fontWeight: "bold"}}>UV Index <a data-tooltip-id="uv-tooltip" data-tooltip-content="UV index is a measure of the strength of UV radiation that causes sunburn at a particular place and time. It ranges from 0 to 11+ and is used to advise people on how to protect themselves from UV exposure and its health risks" className="mark">?</a> </p>
            <Tooltip 
            id="uv-tooltip" 
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
            />
            {uv < 3 ? (<>
              <p>Low</p>
              <p>{uv_labels.low}</p>
            </>) : (
              uv < 6 ? (<>
              <p>Moderate</p>
              <p>{uv_labels.moderate}</p>
              </>) : (uv < 8 ? (<>
              <p>High</p>
              <p>{uv_labels.high}</p>
              </>) : (uv < 11 ? (<>
              <p>Very high</p>
              <p>{uv_labels.veryHigh}</p>
              </>) : (<>
              <p>Extreme</p>
              <p>{uv_labels.extreme}</p>
              </>)))
            )}
          </div>
      <div className="illustration">
        <img alt="" src={`/illustrations/${illustration}.svg`} />
      </div>
    </div>
    </>
  )
}

export default CurrentWeather;