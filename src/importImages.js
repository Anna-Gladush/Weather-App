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

const weatherBackgroundAndIllustration = (code) => {
  let icon;
  let background;
  let illustration;
 
  if (code === '05d' || code === '05n' || code === '06d' || code === '06n' || code === '07' || code === '13') {
    // snow
    icon = `./assets/icons/weather/${code}.svg`;
    background = (code === '05n' || code === '16n') ?  './assets/images/aditya-vyas-PzhmEp_aDU4-unsplash.jpg' : './assets/images/snow-day-wil-stewart-klNpWLkgezo-unsplash.jpg';
    illustration = './assets/illustrations/snow.svg';
  } else if (code === '08d' || code === '08n' || code === '11' || code === '12d' || code === '12n' || code === '14') {
    // thunder
    icon = `./assets/icons/weather/${code}.svg`;
    background = (code === '08d' || code === '12d') ? './assets/images/carrie-borden-LW_o-S1fmFk-unsplash.jpg' : './assets/images/thunder-night-noaa-JG-unsplash.jpg' ;
    illustration = './assets/illustrations/rain.svg';
  } else if (code === '10d' || code === '10n' || code === '09') {
    // rain
    icon = `./assets/icons/weather/${code}.svg`;
    background = (code === '10d') ? './assets/images/rain-day-janusz-walczak-2JvQ3gL4dqQ-unsplash 1.jpg' : './assets/images/ocean-rahan-rlLz08x6FFk-unsplash.jpg' ;
    illustration = './assets/illustrations/rain.svg';
  } else if (code === '01d' || code === '01n') {
    // clear
    icon = `./assets/icons/weather/${code}.svg`;
    background = (code === '01d') ? './assets/images/bahadir-cobanoglu-uX0-txbC9x8-unsplash.jpg' : './assets/images/night-sky-clear-nathan-anderson-unsplash.jpg' ;
    illustration = (code === '01d') ? './assets/illustrations/clear.svg' : './assets/illustrations/cold.svg' ;
  } else if (code === '02d' || code === '02n' || code === '03d' || code === '03n' || code === '04d' || code === '04n' || code === '50') {
    // cloudy or misty
    icon = `./assets/icons/weather/${code}.svg`;
    background = (code === '02d' || code === '03d' || code === '04d') ? './assets/images/cloudy-engin-akyurt-3ihnKT5apmg-unsplash.jpg' : './assets/images/ahmad-pishnamazi-6_sz4q0P4rk-unsplash.jpg' ;
    illustration = './assets/illustrations/wind.svg';
  }
  return {icon, background, illustration}
}

const windDirection = (dir) => {
  if (dir === 'N') {
    return './assets/icons/direction/n.svg';
  } else if (dir === 'NEN') {
    return './assets/icons/direction/nen.svg';
  } else if (dir === 'NE') {
    return './assets/icons/direction/ne.svg';
  } else if (dir === 'ENE') {
    return './assets/icons/direction/ene.svg';
  } else if (dir === 'E') {
    return './assets/icons/direction/e.svg';
  } else if (dir === 'ESE') {
    return './assets/icons/direction/ese.svg';
  } else if (dir === 'SE') {
    return './assets/icons/direction/se.svg';
  } else if (dir === 'SSE') {
    return './assets/icons/direction/sse.svg';
  } else if (dir === 'S') {
    return './assets/icons/direction/s.svg';
  } else if (dir === 'SSW') {
    return './assets/icons/direction/ssw.svg';
  } else if (dir === 'SW') {
    return './assets/icons/direction/sw.svg';
  } else if (dir === 'WSW') {
    return './assets/icons/direction/wsw.svg';
  } else if (dir === 'W') {
    return './assets/icons/direction/w.svg';
  } else if (dir === 'WNW') {
    return './assets/icons/direction/wnw.svg';
  } else if (dir === 'NW') {
    return './assets/icons/direction/nw.svg';
  } else if (dir === 'NNW') {
    return './assets/icons/direction/nnw.svg';
  }
}