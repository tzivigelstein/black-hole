const container = document.getElementById('container')
const _1 = document.getElementById('_1')
const _2 = document.getElementById('_2')
const _3 = document.getElementById('_3')
const _4 = document.getElementById('_4')

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

resize()

window.addEventListener('resize', resize)

function resize() {
  const containerWidth = container.clientWidth
  container.style.height = `${containerWidth}px`
}

setInterval(() => {
  draw()
}, 400)

const draw = () => {
  _1.style.boxShadow = `0 0 ${generateRandom(10, 40)}px 15px rgb(${generateRandom(220, 255)}, 42, 18)`
  _2.style.boxShadow = `0 0 ${generateRandom(10, 40)}px 15px rgb(${generateRandom(30, 90)}, 150, 58)`
  _3.style.boxShadow = `0 0 ${generateRandom(10, 40)}px 15px rgb(${generateRandom(230, 255)}, 39, 241)`
  _4.style.boxShadow = `0 0 ${generateRandom(10, 40)}px 15px rgb(${generateRandom(30, 80)}, 67, 216)`
}
