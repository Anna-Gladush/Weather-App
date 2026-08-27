import { useTranslation } from "react-i18next";

type CardProps = {
  date: string, 
  temp: number, 
  temperatureUnit: string, 
  humidity: number, 
  pressure: number, 
  code: string
}

const Card = ({date, temp, temperatureUnit, humidity, pressure, code}: CardProps) => {
  const { t } = useTranslation("translation");
  
  return (
      <div className="card">
        <p>{date}</p>
        <img src={`/icons/weather/${code}.svg`} alt="current weather icon" />
        <p>{temp}°{temperatureUnit}</p>
        <p>{humidity}%</p>
        <p>{pressure} {temperatureUnit === "C" ? t("current.mmhg") : t("current.hpa")}</p>
      </div>
  )
}

export default Card