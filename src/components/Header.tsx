import type { JSX } from "react/jsx-dev-runtime";

type HeaderProps = {
  city: string,
  temperatureUnit: string,
  handleUnitChange: (type: string) => void,
  handleSearch: (e: any) => void,
  time: string,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean
}

const Header = ({city, temperatureUnit, handleUnitChange, time, handleSearch, query, setQuery, loading}: HeaderProps): JSX.Element => {
  return (
    <header>
      <div className="city">
        <img src="/icons/map.svg" alt="map" width={25}/>
        <p id="city">{city}</p>
      </div>
      <div className="button-metric">
        <button className={`unit metric ${temperatureUnit === 'C' ? 'active' : 'not-active'}`} onClick={() => handleUnitChange('metric')}>°C</button>
        <button className={`unit imperial ${temperatureUnit === 'F' ? 'active' : 'not-active'}`} onClick={() => handleUnitChange('imperial')}>°F</button>
      </div>
      <p>{time}</p>
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city, zip code, or coordinates..."
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Loading...' : ''}
        </button>
      </form>
    </header>
  )
}
// handleSearch, query, setQuery, loading
export default Header;