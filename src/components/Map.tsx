import {format} from "date-fns"
import type { LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
// import * as L from "leaflet"

// {position}
const Map = ({position, zoom, city, country, lat, lon, temp, temperatureUnit, loading, spinner}) => {
  const API_key = import.meta.env.VITE_OPENWEATHER_API;
  // const url =  "http://maps.openweathermap.org/maps/2.0/weather";

  return (
    <MapContainer center={position} zoom={zoom} style={{height: '300px'}} scrollWheelZoom={true}>
    {loading ? (
      <div>
          {/* Base Layer */}
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.osm.org/{z}/{x}/{y}.png`}
        />
        {/* <TileLayer
          url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_key}`}
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_key}`}
        /> */}
      <Marker position={position}>
        <Popup>
          {city}, {country} 
          <br /> 
          {lat}, {lon}
          <br />
          {temp}&deg; / {temperatureUnit}
        </Popup>
      </Marker>
      </div>) : spinner }
  </MapContainer>
  )
}

export default Map;