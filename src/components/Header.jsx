const Header = ({city, time}) => {
  return (
    <header>
      <div className="city">
        <img src="/icons/map.svg" alt="map" width={25}/>
        <p id="city">{city}</p>
      </div>
      <p>{time}</p>
      <div className="search">
        <input type="text" placeholder="Search City" id="search-city"/>
        <button className="submit"></button>
      </div>
    </header>
  )
}
export default Header