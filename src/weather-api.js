const api = '5a4f775d97004809801123746261604';

// Forecast
async function getWeatherData(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${city}&days=3&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error.message);
  }
}

export { getWeatherData }