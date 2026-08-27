import { useState, useCallback } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API;
const API_BASE_URL = 'https://api.weatherapi.com/v1';

export function useWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (location: string) => {
    setLoading(true)
    
    try {
      const response =  await fetch(`${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes&pollen=yes`);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error?.message || 'Failed to fetch weather data');
      }
      setData(json);

      if ([1000, 1003, 1006, 1009, 1066, 1210, 1216, 1222, 1255, 1258, 1261, 1264].includes(json.current.condition.code)) {
          document.documentElement.style.setProperty(
            "--background",
            "linear-gradient(180deg,rgba(64, 175, 255, 1) 0%, rgba(191, 217, 255, 1) 100%)"
          )} else {
            document.documentElement.style.setProperty(
            "--background",
            "linear-gradient(180deg, rgba(135, 204, 255, 1) 0%, rgba(38, 83, 155, 1) 100%)"
          )}
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchWeather }
}
