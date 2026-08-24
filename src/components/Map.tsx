import {format} from "date-fns"
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// {position}
const Map = () => {
  const hours = [];
  for (let i = 0; i < 25; i++) {
    if (i < 10) {
      hours.push(`0${i}`)
    } else {
      hours.push(`${i}`)
    }
  }
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={`https://weathermaps.weatherapi.com/precip/tiles/${format(new Date(), "yyyyMMdd")}${hours[0]}/{z}/{x}/{y}.png`}
    />
  </MapContainer>
    
  )
}

export default Map;