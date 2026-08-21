const Card = ({date, temp, temperatureUnit, humidity, pressure, code}) => {
  return (
      <div className="card">
        <p>{date}</p>
        {/* <img alt="" src="" /> */}
        <p>{temp}°{temperatureUnit}</p>
        <p>{humidity}%</p>
        <p>{pressure} {temperatureUnit === "C" ? "mmHg" : "hPa"}</p>
      </div>
  )
}

export default Card