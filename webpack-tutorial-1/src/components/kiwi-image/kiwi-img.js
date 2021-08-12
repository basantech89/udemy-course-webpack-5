import Kiwi from './img.jpg'
import "./kiwi-img.scss"

class KiwiImage {
  render() {
    const img = document.createElement('img')
    img.src = Kiwi
    img.alt = 'Kiwi image'
    img.classList.add('kiwi-img')

    const body = document.querySelector('body')
    body.appendChild(img)
  }
}

export default KiwiImage