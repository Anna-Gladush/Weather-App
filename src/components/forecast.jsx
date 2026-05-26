const Card = ({date, temp, temp_word, humidity, pressure}) => {
  return (
      <div className="card">
        <p>{date}</p>
        {/* <img alt="" src="" /> */}
        <p>{temp}°{temp_word}</p>
        <p>{humidity}%</p>
        <p>{pressure} hPa</p>
      </div>
  )
}

export default Card