// Importing images dynamically
async function loadImages(type, name, parent = '') {
  let src;
  const div = parent; 
  if (type == 'weather') {
    const module = await import(`./assets/icons/weather/${name}.svg`);
    src = module.default;
  } else if (type == 'direction') {
    const module = await import(`./assets/icons/direction/${name}.svg`);
    src = module.default;
  } else if (type == 'background') {
    const module = await import(`./assets/images/${name}.jpg`);
    src = module.default;
    document.body.style.backgroundImage = `url(${src})`
    return;
  } else if (type == 'illustration') {
    const module = await import(`./assets/illustrations/${name}.svg`);
    src = module.default;
  } 
  const img = document.createElement('IMG');
  img.src = src;
  
  if (type !== 'background') {div.appendChild(img)}
  return img
}

export { loadImages }