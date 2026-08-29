import 'leaflet/dist/leaflet.css';
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

type MapProps = {
  position: [number, number],
  zoom: number,
  city: string,
  country: string,
  temp: number,
  temperatureUnit: string
}

const Map = ({position, zoom, city, country, temp, temperatureUnit}: MapProps): JSX.Element => {
  const { t } = useTranslation("translation")
  const API_key = import.meta.env.VITE_OPENWEATHER_API;
  const [tiles, setTiles] = useState({
    temperature: false,
    rain: false,
    wind: false,
    pressure: false
  })
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });
  return (
    <>
      <form className='map-options'>
        <h3>{t("map.weatherOverlays")}</h3>
        <label>{t("map.temperature")}<input type="checkbox" name="temperature" id="temperature" onChange={() => {
          setTiles((prev) => ({
            ...tiles,
            temperature: !prev.temperature
          })
          )
        }}/></label>
        
        <label>{t("map.cloudsPerc")}<input type="checkbox" name="rain" id="rain"
        onChange={() => {
          setTiles((prev) => ({
            ...tiles,
            rain: !prev.rain
          })
          )
        }}/></label>
        
        <label>{t("map.wind")}<input type="checkbox" name="wind" id="wind"
        onChange={() => {
          setTiles((prev) => ({
            ...tiles,
            wind: !prev.wind
          })
          )
        }}/></label>

        <label>{t("map.pressure")}<input type="checkbox" name="pressure" id="pressure"
        onChange={() => {
          setTiles((prev) => ({
            ...tiles,
            pressure: !prev.pressure
          })
          )
        }}/></label>
      </form>
      <MapContainer center={position} zoom={zoom} style={{height: '300px', width: "100vw", fontSize: "1em"}} scrollWheelZoom={true}>
        {/* Base Layer */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={position}>
            <Popup>
              {city}, {country} 
              <br /> 
              {temp}&deg;{temperatureUnit}
            </Popup>
          </Marker>

          {tiles.rain && 
          <>
          <TileLayer
            opacity={1.0}
            zIndex={2}
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_key}`}
          />

          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_key}`}
            opacity={1.0}
            zIndex={5}
          />
          </>}

          {tiles.temperature && <TileLayer
            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_key}`}
            opacity={1.0}
            zIndex={7}
          />}

          {tiles.wind &&             
          <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_key}`}
              opacity={0.6}
              zIndex={10}
              
            />
          }

          {tiles.pressure && <TileLayer
            url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_key}`}
            opacity={0.8}
            zIndex={9}
          />}
      </MapContainer>
    </>
    
  )
}

export default Map;