const getImages = (() => {
  const weatherIcon = (code, day) => {
    if ([1000].includes(code)){
      return day === 1 ? '01d' : '01n';
    } else if ([1003].includes(code)) {
      return day === 1 ? '02d' : '02n';
    } else if ([1006].includes(code)) {
      return '03';
    } else if ([1009].includes(code)) {
      return '04';
    } else if ([1066, 1210, 1216, 1222, 1255, 1258, 1261, 1264].includes(code)) {
      return day === 1 ? '05d' : '05n';
    } else if ([1069, 1204, 1207, 1249, 1252].includes(code)) {
      return day === 1 ? '06d' : '06n';
    } else if ([1072, 1114, 1168, 1171, 1198, 1201].includes(code)) {
      return '07';
    } else if ([1087, 1273].includes(code)) {
      return day === 1 ? '08d' : '08n';
    } else if ([1150, 1153, 1183, 1189, 1195].includes(code)) {
      return '09';
    } else if ([1063, 1180, 1186, 1192, 1240, 1243, 1246].includes(code)) {
      return day === 1 ? '10d' : '10n';
    } else if ([1276].includes(code)) {
      return '11';
    } else if ([1279].includes(code)) {
      return day === 1 ? '12d' : '12n';
    } else if ([1117, 1213, 1219, 1225, 1237].includes(code)) {
      return '13';
    } else if ([1282].includes(code)) {
      return '14';
    } else if ([1030, 1135, 1147].includes(code)) {
      return '50';
    }
  }

  const weatherBackgroundAndIllustration = (code, day) => {
    const icon = code;
    let background;
    let illustration;
  
    if (code === '05d' || code === '05n' || code === '06d' || code === '06n' || code === '07' || code === '13') {
      // snow
      background = day === 1 ? 'snow-day-wil-stewart-klNpWLkgezo-unsplash' : 'aditya-vyas-PzhmEp_aDU4-unsplash';
      illustration = 'snow';
    } else if (code === '08d' || code === '08n' || code === '11' || code === '12d' || code === '12n' || code === '14') {
      // thunder
      background = day === 1 ? 'carrie-borden-LW_o-S1fmFk-unsplash' : 'thunder-night-noaa-JG-unsplash' ;
      illustration = 'rain';
    } else if (code === '10d' || code === '10n' || code === '09') {
      // rain
      background = day === 1 ? 'rain-day-janusz-walczak-2JvQ3gL4dqQ-unsplash' : 'ocean-rahan-rlLz08x6FFk-unsplash' ;
      illustration = 'rain';
    } else if (code === '01d' || code === '01n') {
      // clear
      background = day === 1 ? 'bahadir-cobanoglu-uX0-txbC9x8-unsplash' : 'night-sky-clear-nathan-anderson-unsplash' ;
      illustration = (code === '01d') ? 'clear' : 'cold' ;
    } else if (code === '02d' || code === '02n' || code === '03d' || code === '03n' || code === '04d' || code === '04n' || code === '50') {
      // cloudy or misty
      background = day === 1 ? 'cloudy-engin-akyurt-3ihnKT5apmg-unsplash' : 'ahmad-pishnamazi-6_sz4q0P4rk-unsplash';
      illustration = 'wind';
    }
    return {icon, background, illustration}
  }

  const windDirection = (dir) => {
    return dir.toLowerCase();
  }
  return {
  weatherIcon,
  weatherBackgroundAndIllustration,
  windDirection
  }
})()
export { getImages }