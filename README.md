# Weather App

Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>

<table>
<caption>Information about Weather Conditions codes from <a href="https://www.weatherapi.com/docs/weather_conditions.xml">WeatherAPI</a></caption>
  <tr>
    <th>Weather category</th>
    <th colspan="2">Icon</th>
    <th>ID</th>
    <th>done</th>
  </tr>
  <tr>
    <td>clear sky</td>
    <td>01d - day<img src="//cdn.weatherapi.com/weather/64x64/day/113.png"></td>
    <td>01n - night<img src="//cdn.weatherapi.com/weather/64x64/night/113.png"></td>
    <td>1000</td>
    <td>yes</td>
  </tr>
  <tr>
    <td>Partly cloudy</td>
    <td>02d - day <img src="//cdn.weatherapi.com/weather/64x64/day/116.png"></td>
    <td>02n - night <img src="//cdn.weatherapi.com/weather/64x64/night/116.png"></td>
    <td>1003</td>
    <td>yes</td>

  </tr>
  <tr>
    <td>Cloudy</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/119.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/119.png"></td>
    <td>1006</td>
    <td>03 - yes</td>
  </tr>
  <tr>
    <td>Overcast</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/122.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/122.png"></td>
    <td>1009</td>
    <td>04 - yes</td>

  </tr>
  <tr>
    <td>mist</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/143.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/143.png"></td>
    <td>1030</td>
    <td>50 - yes</td>

  </tr>
  <tr>
    <td>Patchy rain possible</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/176.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/176.png"></td>
    <td>1063</td>
    <td>yes</td>

  </tr>
  <tr>
    <td>Patchy snow possible</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/179.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/179.png"></td>
    <td>1066</td>
    <td>no - 05d 05n</td>

  </tr>
  <tr>
    <td>Patchy sleet possible</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/182.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/182.png"></td>
    <td>1069</td>
    <td>no - 06d 06n</td>
  </tr>
  <tr>
    <td>Patchy freezing drizzle possible</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/185.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/185.png"></td>
    <td>1072</td>
    <td>no - 07</td>
  </tr>
  <tr>
    <td>Thundery outbreaks possible</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/200.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/200.png"></td>
    <td>1087</td>
    <td>no - 08</td>
  </tr>
  <tr>
    <td>Blowing snow</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/227.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/227.png"></td>
    <td>1114</td>
    <td>no - 07</td>
  </tr>
  <tr>
    <td>Blizzard</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/230.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/230.png"></td>
    <td>1117</td>
    <td>13 - yes</td>
  </tr>
  <tr>
    <td>Fog</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/248.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/248.png"></td>
    <td>1135</td>
    <td>50 - yes</td>
  </tr>
  <tr>
    <td>Freezing fog</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/260.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/260.png"></td>
    <td>1147</td>
    <td>50 - yes</td>
  </tr>
  <tr>
    <td>Patchy light drizzle</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/263.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/263.png"></td>
    <td>1150</td>
    <td>09 - yes</td>
  </tr>
  <tr>
    <td>Light drizzle</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/266.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/266.png"></td>
    <td>1153</td>
    <td>09 - yes</td>
  </tr>
  <tr>
    <td>Freezing drizzle</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/281.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/281.png"></td>
    <td>1168</td>
    <td>07 - no</td>
  </tr>
  <tr>
    <td>Heavy freezing drizzle</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/284.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/284.png"></td>
    <td>1171</td>
    <td>07 - no</td>
  </tr>
  <tr>
    <td>Patchy light rain</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/293.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/293.png"></td>
    <td>1180</td>
    <td>yes</td>
  </tr>
  <tr>
    <td>Light rain</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/296.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/296.png"></td>
    <td>1183</td>
    <td>09 - yes</td>
  </tr>
  <tr>
    <td>Moderate rain at times</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/299.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/299.png"></td>
    <td>1186</td>
    <td>yes</td>

  </tr>
  <tr>
    <td>Moderate rain</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/302.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/302.png"></td>
    <td>1189</td>
    <td>09 - yes</td>
  </tr>
  <tr>
    <td>Heavy rain at times</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/305.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/305.png"></td>
    <td>1192</td>
    <td>yes</td>
  </tr>
  <tr>
    <td>Heavy rain</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/308.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/308.png"></td>
    <td>1195</td>
    <td>09 - yes</td>
  </tr>
  <tr>
    <td>Light freezing rain</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/311.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/311.png"></td>
    <td>1198</td>
    <td>07 - no</td>
  </tr>
  <tr>
    <td>Moderate or heavy freezing rain</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/314.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/314.png"></td>
    <td>1201</td>
    <td>07 - no</td>
  </tr>
  <tr>
    <td>Light sleet</td>
    <td>06d - day <img src="//cdn.weatherapi.com/weather/64x64/day/317.png"></td>
    <td>06n - night <img src="//cdn.weatherapi.com/weather/64x64/night/317.png"></td>
    <td>1204</td>
    <td>no</td>
  </tr>
  <tr>
    <td>Moderate or heavy sleet</td>
    <td>06d - day <img src="//cdn.weatherapi.com/weather/64x64/day/320.png"></td>
    <td>06n - night <img src="//cdn.weatherapi.com/weather/64x64/night/320.png"></td>
    <td>1207</td>
    <td>no</td>
  </tr>
  <tr>
    <td>Patchy light snow</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/323.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/323.png"></td>
    <td>1210</td>
    <td>no</td>
  </tr>
  <tr>
    <td>Light snow</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/326.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/326.png"></td>
    <td>1213</td>
    <td>13 - yes </td>
  </tr>
  <tr>
    <td>Patchy moderate snow</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/329.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/329.png"></td>
    <td>1216</td>
    <td>no</td>

  </tr>
  <tr>
    <td>Moderate snow</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/332.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/332.png"></td>
    <td>1219</td>
    <td>13 - yes </td>
  </tr>
  <tr>
    <td>Patchy heavy snow</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/335.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/335.png"></td>
    <td>1222</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Heavy snow</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/338.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/338.png"></td>
    <td>1225</td>
    <td>13 - yes </td>
  </tr>
  <tr>
    <td>Ice pellets</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/350.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/350.png"></td>
    <td>1237</td>
    <td>13 - yes </td>
  </tr>  
  <tr>
    <td>Light rain shower</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/353.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/353.png"></td>
    <td>1240</td>
    <td>yes </td>
  </tr>  
  <tr>
    <td>Moderate or heavy rain shower</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/356.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/356.png"></td>
    <td>1243</td>
    <td>yes </td>
  </tr>  
  <tr>
    <td>Torrential rain shower</td>
    <td>10d - day <img src="//cdn.weatherapi.com/weather/64x64/day/359.png"></td>
    <td>10n - night <img src="//cdn.weatherapi.com/weather/64x64/night/359.png"></td>
    <td>1246</td>
    <td>yes </td>
  </tr>  
  <tr>
    <td>Light sleet showers</td>
    <td>06d - day <img src="//cdn.weatherapi.com/weather/64x64/day/362.png"></td>
    <td>06n - night <img src="//cdn.weatherapi.com/weather/64x64/night/362.png"></td>
    <td>1249</td>
    <td>no </td>
  </tr>  
  <tr>
    <td>Moderate or heavy sleet showers</td>
    <td>06d - day <img src="//cdn.weatherapi.com/weather/64x64/day/365.png"></td>
    <td>06n - night <img src="//cdn.weatherapi.com/weather/64x64/night/365.png"></td>
    <td>1252</td>
    <td>no </td>
  </tr>  
  <tr>
    <td>Light snow showers</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/368.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/368.png"></td>
    <td>1255</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Moderate or heavy snow showers</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/371.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/371.png"></td>
    <td>1258</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Light showers of ice pellets</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/374.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/374.png"></td>
    <td>1261</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Moderate or heavy showers of ice pellets</td>
    <td>05d - day <img src="//cdn.weatherapi.com/weather/64x64/day/377.png"></td>
    <td>05n - night <img src="//cdn.weatherapi.com/weather/64x64/night/377.png"></td>
    <td>1264</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Patchy light rain with thunder</td>
    <td>08d - day <img src="//cdn.weatherapi.com/weather/64x64/day/386.png"></td>
    <td>08n - night <img src="//cdn.weatherapi.com/weather/64x64/night/386.png"></td>
    <td>1273</td>
    <td>no </td>
  </tr>
  <tr>
    <td>Moderate or heavy rain with thunder</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/389.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/389.png"></td>
    <td>1276</td>
    <td>yes 11</td>
  </tr>
  <tr>
    <td>Patchy light snow with thunder</td>
    <td>12d -day <img src="//cdn.weatherapi.com/weather/64x64/day/392.png"></td>
    <td>12n - night <img src="//cdn.weatherapi.com/weather/64x64/night/392.png"></td>
    <td>1279</td>
    <td>no</td>

  </tr>
  <tr>
    <td>Moderate or heavy snow with thunder</td>
    <td>day <img src="//cdn.weatherapi.com/weather/64x64/day/395.png"></td>
    <td>night <img src="//cdn.weatherapi.com/weather/64x64/night/395.png"></td>
    <td>1282</td>
    <td>no - 14</td>
  </tr>
<table>

### Resources:

- Sound: Sound Effect "Thunder Sound" by <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=375727">Jurij</a>, Sound Effect "CALMING RAIN" by <a href="https://pixabay.com/users/liecio-3298866/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=257596">LIECIO</a>, Sound Effect "Forest,birds" by <a href="https://pixabay.com/users/dany_photo-42436275/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=319791">Dany_photo</a>

- Background photos: <a href="https://unsplash.com/photos/grassy-shore-of-a-calm-lake-with-hills-beyond-uX0-txbC9x8">Grassy shore of a calm lake with hills beyond</a> by <a href="https://unsplash.com/@pulchra_prospectus">Bahadir Cobanoglu</a>, <a href="https://unsplash.com/photos/clouds-in-the-sky-with-smoke-coming-out-of-it-LW_o-S1fmFk
  ">clouds in the sky with smoke coming out of it</a> by <a href="https://unsplash.com/@carrie_borden">
  Carrie Borden</a>, <a href="https://unsplash.com/photos/a-full-moon-is-seen-through-the-clouds-6_sz4q0P4rk">a full moon is seen through the clouds</a> by <a href="https://unsplash.com/@s_ahmadreza_p">
  Ahmad Pishnamazi</a>, <a href="https://unsplash.com/photos/a-black-and-white-photo-of-snow-falling-PzhmEp_aDU4">a black and white photo of snow falling</a> by <a href="https://unsplash.com/@aditya1702">
  Aditya Vyas</a>, <a href="https://unsplash.com/photos/green-tree-rlLz08x6FFk">green tree</a> by <a href="https://unsplash.com/@oceanrahan">
  Ocean Rahan</a>, <a href="https://unsplash.com/photos/mountains-with-trees-under-white-star-at-night-L95xDkSSuWw
  ">mountains with trees under white star at night</a> by <a href="https://unsplash.com/@nathananderson">
  Nathan Anderson</a>, <a href="https://unsplash.com/photos/grayscale-photo-of-trees-and-road-cM4OgdYWqFY">grayscale photo of trees and road</a> by <a href="https://unsplash.com/@presentsquare">Presentsquare</a>, <a href="https://unsplash.com/photos/single-cell-thunderstorm-JG_HfydoNqY">single cell thunderstorm</a> by <a href="https://unsplash.com/@noaa">NOAA</a>,<a href="https://unsplash.com/photos/white-clouds-and-blue-sky-during-daytime-3ihnKT5apmg">white clouds and blue sky during daytime</a> by <a href="https://unsplash.com/@enginakyurt">engin akyurt</a>, <a href="https://unsplash.com/photos/a-close-up-of-a-tree-branch-with-rain-2JvQ3gL4dqQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">a close up of a tree branch with rain</a> by <a href="https://unsplash.com/@jwvein">Janusz Walczak</a>, <a href="https://unsplash.com/photos/worms-eye-view-of-tree-covered-with-snow-klNpWLkgezo">worm's-eye view of tree covered with snow</a> by <a href="https://unsplash.com/@wilstewart3">Wil Stewart</a>,

- Forecast icons: <a href="https://www.freepik.com/free-vector/weather-icons-collection_1044316.htm#fromView=search&page=1&position=24&uuid=0998b45c-d684-4290-8002-f076301844ab&query=forecast">Image by bamdewanto on Freepik</a>

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
