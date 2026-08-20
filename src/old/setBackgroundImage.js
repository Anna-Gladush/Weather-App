export default function setImage({ imgPath }) {
    document.documentElement.style.setProperty('--bodyImage', imgPath)
}