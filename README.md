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
</ul>

## How to improve?

<p>- adding translations to Russian</p>
<p>- keyboard support</p>

## Running the project

1. You need to have an OpenWeather Account and WeatherAPI Account, follow the instructions described <a href="https://openweathermap.org/api">here</a> and <a href="https://www.weatherapi.com/signup.aspx">here</a> to create an account and grab an API key.
   2)Clone the repository

<code>git clone https://github.com/Anna-Gladush/Weather-App.git</code>

3. Install the packages using the command <code>npm install</code>

4. Create a <code>.env</code> file in the root directory of the project. Add the following properties in it:

VITE_WEATHER_API=<your WeatherAPI Key>
VITE_OPENWEATHER_API=<your OpenWeather API Key>

## Live Preview

## What I learned

How to work with leaflet, weatherAPI and OpenWeatherMap API; practiced custom useHooks;

## Addittional information

<table>
<caption>Information about Weather Conditions codes from <a href="https://www.weatherapi.com/docs/weather_conditions.xml">WeatherAPI</a></caption>
  <tr>
    <th>Weather category</th>
    <th>code</th>
  </tr>
  <tr>
    <td>clear sky</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>Partly cloudy</td>
    <td>1003</td>
  </tr>
  <tr>
    <td>Cloudy</td>
    <td>1006</td>
  </tr>
  <tr>
    <td>Overcast</td>
    <td>1009</td>
  </tr>
  <tr>
    <td>mist</td>
    <td>1030</td>
  </tr>
  <tr>
    <td>Patchy rain possible</td>
    <td>1063</td>
  </tr>
  <tr>
    <td>Patchy snow possible</td>
    <td>1066</td>
  </tr>
  <tr>
    <td>Patchy sleet possible</td>
    <td>1069</td>
  </tr>
  <tr>
    <td>Patchy freezing drizzle possible</td>
    <td>1072</td>
  </tr>
  <tr>
    <td>Thundery outbreaks possible</td>
    <td>1087</td>
  </tr>
  <tr>
    <td>Blowing snow</td>
    <td>1114</td>
  </tr>
  <tr>
    <td>Blizzard</td>
    <td>1117</td>
  </tr>
  <tr>
    <td>Fog</td>
    <td>1135</td>
  </tr>
  <tr>
    <td>Freezing fog</td>
    <td>1147</td>
  </tr>
  <tr>
    <td>Patchy light drizzle</td>
    <td>1150</td>
  </tr>
  <tr>
    <td>Light drizzle</td>
    <td>1153</td>
  </tr>
  <tr>
    <td>Freezing drizzle</td>
    <td>1168</td>
  </tr>
  <tr>
    <td>Heavy freezing drizzle</td>
    <td>1171</td>
  </tr>
  <tr>
    <td>Patchy light rain</td>
    <td>1180</td>
  </tr>
  <tr>
    <td>Light rain</td>
    <td>1183</td>
  </tr>
  <tr>
    <td>Moderate rain at times</td>
    <td>1186</td>
  </tr>
  <tr>
    <td>Moderate rain</td>
    <td>1189</td>
  </tr>
  <tr>
    <td>Heavy rain at times</td>
    <td>1192</td>
  </tr>
  <tr>
    <td>Heavy rain</td>
    <td>1195</td>
  </tr>
  <tr>
    <td>Light freezing rain</td>
    <td>1198</td>
  </tr>
  <tr>
    <td>Moderate or heavy freezing rain</td>
    <td>1201</td>
  </tr>
  <tr>
    <td>Light sleet</td>
    <td>1204</td>
  </tr>
  <tr>
    <td>Moderate or heavy sleet</td>
    <td>1207</td>
  </tr>
  <tr>
    <td>Patchy light snow</td>
    <td>1210</td>
  </tr>
  <tr>
    <td>Light snow</td>
    <td>1213</td>
  </tr>
  <tr>
    <td>Patchy moderate snow</td>
    <td>1216</td>

  </tr>
  <tr>
    <td>Moderate snow</td>
    <td>1219</td>
  </tr>
  <tr>
    <td>Patchy heavy snow</td>
    <td>1222</td>
  </tr>
  <tr>
    <td>Heavy snow</td>
    <td>1225</td>
  </tr>
  <tr>
    <td>Ice pellets</td>
    <td>1237</td>
  </tr>  
  <tr>
    <td>Light rain shower</td>
    <td>1240</td>
  </tr>  
  <tr>
    <td>Moderate or heavy rain shower</td>
    <td>1243</td>
  </tr>  
  <tr>
    <td>Torrential rain shower</td>
    <td>1246</td>
  </tr>  
  <tr>
    <td>Light sleet showers</td>
    <td>1249</td>
  </tr>  
  <tr>
    <td>Moderate or heavy sleet showers</td>
    <td>1252</td>
  </tr>  
  <tr>
    <td>Light snow showers</td>
    <td>1255</td>
  </tr>
  <tr>
    <td>Moderate or heavy snow showers</td>
    <td>1258</td>
  </tr>
  <tr>
    <td>Light showers of ice pellets</td>
    <td>1261</td>
  </tr>
  <tr>
    <td>Moderate or heavy showers of ice pellets</td>
    <td>1264</td>
  </tr>
  <tr>
    <td>Patchy light rain with thunder</td>
    <td>1273</td>
  </tr>
  <tr>
    <td>Moderate or heavy rain with thunder</td>
    <td>1276</td>
  </tr>
  <tr>
    <td>Patchy light snow with thunder</td>
    <td>1279</td>

  </tr>
  <tr>
    <td>Moderate or heavy snow with thunder</td>
    <td>1282</td>
  </tr>
<table>

## Resources:

- Woman in different seasons illustaration set: <a href="https://www.freepik.com/free-vector/woman-different-seasons-set_5889720.htm#fromView=search&page=1&position=33&uuid=a92f24d5-e6d9-4acc-a5eb-562bfe6613e8&query=human+weather">Image by pch.vector on Freepik</a>

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
