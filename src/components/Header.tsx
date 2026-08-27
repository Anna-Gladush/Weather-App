import type { JSX } from "react/jsx-dev-runtime";
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  city: string,
  temperatureUnit: string,
  handleUnitChange: (type: string) => void,
  handleSearch: (e: any) => void,
  time: string,
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean,
  handleChangeLanguage: () => void
}

const Header = ({city, temperatureUnit, handleUnitChange, time, handleSearch, query, setQuery, loading, handleChangeLanguage}: HeaderProps): JSX.Element => {
  const { t } = useTranslation("translation")
  return (
    <header>
      <div className="city">
        <img src="/icons/map.svg" alt="map" width={25}/>
        <p id="city">{city}</p>
      </div>

      <p>{time}</p>
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("header.searchPlaceholder")}
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? t("header.loading") : ''}
        </button>
      </form>
      <div className="button-metric">
        <button className={`unit metric ${temperatureUnit === 'C' ? 'active' : 'not-active'}`} onClick={() => handleUnitChange('metric')}>°C</button>
        <button className={`unit imperial ${temperatureUnit === 'F' ? 'active' : 'not-active'}`} onClick={() => handleUnitChange('imperial')}>°F</button>
      </div>
      <button onClick={handleChangeLanguage} className="change-lang">{t("header.changeLang")}</button>
    </header>
  )
}
export default Header;