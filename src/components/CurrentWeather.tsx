import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

type CurrentWeatherProps = {
  code: string, 
  temperatureUnit: string, 
  temp: number, 
  min: number, 
  max: number, 
  condition: number, 
  feelslike: number, 
  humidity: number, 
  pressure: number, 
  visibility: string, 
  direction: string, 
  wind_km: number, 
  uv: number, 
  dewpoint: number, 
  aqi: number, 
  illustration: string
}

const CurrentWeather = ({ code, temperatureUnit, temp, min, max, condition, feelslike, humidity, pressure, visibility, direction, wind_km, uv, dewpoint, aqi, illustration}: CurrentWeatherProps) => {

  const { t } = useTranslation("translation");

  const aqi_labels = ['', t("aqi.good"), t("aqi.moderate"), t("aqi.sensitive"), t("aqi.unhealthy"), t("aqi.veryUnhealthy"), t("aqi.hazardous")];
  const uv_labels = {low: t("uv.low.instruction"), moderate: t("uv.moderate.instruction"), high: t("uv.high.instruction"), veryHigh: t("uv.veryHigh.instruction"), extreme: t("uv.extreme.instruction")};
  
  const aqiInfo = aqi_labels[aqi];
  const wind = Math.floor(wind_km * 1000/ 3600);

  return (
    <>
    <div className="today">
      <div className="day">
        <p className="current-title">{t("current.today")}</p>
        <div className="day-info">
          <div className="info-left">
            <span>{temp}</span><sup>°{temperatureUnit}</sup>
            <img src={`/icons/weather/${code}.svg`} alt="current weather icon" />
          </div>
          <div className="info-right">
            <p>{t(`weatherCondition.${condition}`)}</p>
            <p>{min}°...{max}°{temperatureUnit}</p>
            <p>{t("current.feels")} {feelslike}°{temperatureUnit}</p>
          </div>
        </div>
        <div className="info-bottom">
          <div className="humidity">
            <p style={{fontWeight: "bold"}}>{t("current.humidity")}</p>
            <p>{humidity}%</p>
          </div>
          <div className="pressure">
            <p style={{fontWeight: "bold"}}>{t("current.pressure")} <a data-tooltip-id="pressure-tooltip" data-tooltip-content={t("current.pressureTooltip")} className="mark">?</a></p>
            <Tooltip 
            id="pressure-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{pressure} {temperatureUnit === "C" ? t("current.mmhg") : t("current.hpa")}</p>
          </div>
          <div className="visibility">
            <p style={{fontWeight: "bold"}}>{t("current.visibility")} <a data-tooltip-id="visibility-tooltip" data-tooltip-content={t("current.visibilityTooltip")} className="mark">?</a> </p>
            <Tooltip 
            id="visibility-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{visibility} {t("current.km")}</p>
          </div>
          <div className="wind">
            <p style={{fontWeight: "bold"}}>{wind < 2.2 ? t("current.wind.lightAir") : (wind < 3.7 ? t("current.wind.lightBreeze") : (wind < 5.8 ? t("current.wind.gentle") : (wind < 8.9 ? t("current.wind.moderate") : (wind < 11.2 ? t("current.wind.fresh") : t("current.wind.strong")))))}</p>
            <div style={{display: "flex", alignItems:"center", gap: "10px"}}>
              <p>{t(`current.windDir.${direction}`)}</p>
              <img src={`/icons/direction/${direction.toLowerCase()}.svg`} alt="wind direction icon" /> 
            </div>
            <p>{wind} {t("current.ms")}</p>
          </div>
          <div className="air-quality">
            <p style={{fontWeight: "bold"}}>{t("current.airQuality")} <a data-tooltip-id="air-quality-tooltip" data-tooltip-content={t("current.sirQualityTooltip")} className="mark">?</a> </p>
            <Tooltip 
            id="air-quality-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{aqiInfo}</p>
          </div>
          <div className="dew">
            <p style={{fontWeight: "bold"}}>{t("current.dewpoint")} <a data-tooltip-id="dewpoint-tooltip" data-tooltip-content={t("current.dewpointTooltip")} className="mark">?</a> </p>
            <Tooltip 
            id="dewpoint-tooltip"
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
             />
            <p>{dewpoint}°{temperatureUnit}</p>
          </div>      
          </div>        
        </div>
          <div className="uv">
            <p style={{fontWeight: "bold"}}>{t("current.uv")} <a data-tooltip-id="uv-tooltip" data-tooltip-content={t("current.uvTooltip")} className="mark">?</a> </p>
            <Tooltip 
            id="uv-tooltip" 
            style={{ maxWidth: "250px", whiteSpace: "normal" }}
            />
            {uv < 3 ? (<>
              <p>{t("uv.low.label")}</p>
              <p>{uv_labels.low}</p>
            </>) : (
              uv < 6 ? (<>
              <p>{t("uv.modearte.label")}</p>
              <p>{uv_labels.moderate}</p>
              </>) : (uv < 8 ? (<>
              <p>{t("uv.high.label")}</p>
              <p>{uv_labels.high}</p>
              </>) : (uv < 11 ? (<>
              <p>{t("uv.veryHigh.label")}</p>
              <p>{uv_labels.veryHigh}</p>
              </>) : (<>
              <p>{t("uv.extreme.label")}</p>
              <p>{uv_labels.extreme}</p>
              </>)))
            )}
          </div>
      <div className="illustration">
        <img alt="girl" src={`/illustrations/${illustration}.svg`} />
      </div>
    </div>
    </>
  )
}

export default CurrentWeather;