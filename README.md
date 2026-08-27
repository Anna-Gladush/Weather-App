# Weather App

Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a> and <a href="https://openweathermap.org/api/" title="OpenWeatherMap API">OpenWeatherMap.org</a>

## Technologies

<ul>
  <li><code>React</code></li>
  <li><code>TypeScript</code></li>
  <li><code>i18next</code></li>
  <li><code>leaflet</code>, <code>react-leaflet</code></li>
</ul>

## Features

<ul style="list-style-type: none;">
  <li>✓ - finds weather forecast based on your ip location, as well as through search</li>
  <li>✓ - custom weather icons + custom spinner (made in SVGATOR)</li>
  <li>✓ - map view with temperature, wind, percipitation + clouds, pressure layers</li>
  <li>✓ - AQI and UV information</li>
  <li>✓ - tooltips with additional information</li>
  <li>✓ - en/ru translation</li>
</ul>

## How to improve?

<p>- keyboard support</p>

## Running the project

1. You need to have an OpenWeather Account and WeatherAPI Account, follow the instructions described <a href="https://openweathermap.org/api">here</a> and <a href="https://www.weatherapi.com/signup.aspx">here</a> to create an account and grab an API key.

2. Clone the repository

<code>git clone https://github.com/Anna-Gladush/Weather-App.git</code>

3. Install the packages using the command <code>npm install</code>

4. Create a <code>.env</code> file in the root directory of the project. Add the following properties in it:

<code>VITE_WEATHER_API=`<your WeatherAPI Key>`</code>

<code>VITE_OPENWEATHER_API=`<your OpenWeather API Key>`</code>

## Live Preview

## What I learned

How to work with leaflet, weatherAPI and OpenWeatherMap API; practiced custom useHooks;

## Resources:

- Woman in different seasons illustaration set: <a href="https://www.freepik.com/free-vector/woman-different-seasons-set_5889720.htm#fromView=search&page=1&position=33&uuid=a92f24d5-e6d9-4acc-a5eb-562bfe6613e8&query=human+weather">Image by pch.vector on Freepik</a>

## Addittional information

Reference for wind direction degree range:

<table>
  <tr>
    <th>Wind direction</th>
    <th>Beaufort Scale</th>
  </tr>
  <tr>
    <td><img src="https://www.researchgate.net/profile/Richard-Siewierski-2/publication/265538256/figure/tbl1/AS:669415825739783@1536612578236/1-These-are-the-standard-sixteen-wind-rose-wind-directions-and-their-corresponding.png">
    Figure - 16 standard wind rose wind directions and their corresponding degree ranges.</td>
    <td><img src="https://www.researchgate.net/profile/Richard-Siewierski-2/publication/265538256/figure/tbl2/AS:669415825747983@1536612578259/These-are-the-standard-Beaufort-wind-speed-classifications-with-corresponding-wind-speed.png">
    Figure - standard Beaufort wind speed classifications with corresponding wind speed ranges in metric units.</td>
  </tr>
</table>

Taken from article: <a href="https://www.researchgate.net/publication/265538256_An_Analysis_of_Seasonal_Sea_Ice_off_the_Coast_of_Cape_Dorset_Nunavut_Canada">Siewierski, Richard. An Analysis of Seasonal Sea Ice off the Coast of Cape Dorset, Nunavut, Canada</a>. Pictures are uploaded by <a href="https://www.researchgate.net/profile/Richard-Siewierski-2">Richard Siewierski</a> <a name="one">[1]</a>.

## Citations:

[1](#one) - Siewierski R. An Analysis of Seasonal Sea Ice off the Coast of Cape Dorset, Nunavut, Canada : дис. – 2010.
