const weatherTools = (() => {
  const windDirection = (deg) => {
    const wind_deg = Number(deg);
    if (wind_deg >= 0 && wind_deg <= 11.25 || wind_deg > 348.75 && wind_deg <= 360 ) {
      return 'N';
    } else if (wind_deg > 11.25 && wind_deg <= 33.75) {
      return 'NNE';
    } else if (wind_deg > 33.75 && wind_deg <= 56.25) {
      return 'NE';
    } else if (wind_deg > 56.25 && wind_deg <= 78.75) {
      return 'ENE';
    } else if (wind_deg > 78.75 && wind_deg <= 101.25) {
      return 'E';
    } else if (wind_deg > 101.25 && wind_deg <= 123.75) {
      return 'ESE';
    } else if (wind_deg > 123.75 && wind_deg <= 146.25) {
      return 'SE';
    } else if (wind_deg > 146.25 && wind_deg <= 168.75) {
      return 'SSE';
    } else if (wind_deg > 168.75 && wind_deg <= 191.25) {
      return 'S';
    } else if (wind_deg > 191.25 && wind_deg <= 213.75) {
      return 'SSW';
    } else if (wind_deg > 213.75 && wind_deg <= 236.25) {
      return 'SW';
    } else if (wind_deg > 236.25 && wind_deg <= 258.75) {
      return 'WSW';
    } else if (wind_deg > 258.75 && wind_deg <= 281.25) {
      return 'W';
    } else if (wind_deg > 281.25 && wind_deg <= 303.75) {
      return 'WNW';
    } else if (wind_deg > 303.75 && wind_deg <= 326.25) {
      return 'NW';
    } else if (wind_deg > 326.25 && wind_deg <= 348.75) {
      return 'NNW';
    }
  }
  const BeaufortScale = (winds_speed) => {
    const speed = Number(winds_speed);
    if (speed >= 0.5 && speed < 2.1) {
      return [1, 'Light Air'];
    } else if (speed >= 2.1 && speed < 3.6) {
      return [2, 'Light Breeze'];
    } else if (speed >= 3.6 && speed < 5.7) {
      return [3, 'Gentle Breeze'];
    } else if (speed >= 5.7 && speed < 8.8) {
      return [4, 'Moderate Breeze'];
    } else if (speed >= 8.8 && speed < 11.1) {
      return [5, 'Fresh Breeze'];
    } else if (speed >= 11.1) {
      return [6, 'Strong Breeze'];
    }
  }
  return {
    windDirection,
    BeaufortScale
  }
})()
export { weatherTools }