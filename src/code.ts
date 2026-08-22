export const weatherIcon = (code, day) => {
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

