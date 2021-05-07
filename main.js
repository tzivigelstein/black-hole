const _1 = document.getElementById('_1')
const _2 = document.getElementById('_2')
const _3 = document.getElementById('_3')
const _4 = document.getElementById('_4')

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

setInterval(() => {
  draw()
}, 400)

const draw = () => {
  _1.style.boxShadow = `0 0 ${generateRandom(20, 40)}px 2px rgb(226, 42, 18)`
  _2.style.boxShadow = `0 0 ${generateRandom(20, 40)}px 2px rgb(33, 150, 58)`
  _3.style.boxShadow = `0 0 ${generateRandom(20, 40)}px 2px rgb(241, 39, 241)`
  _4.style.boxShadow = `0 0 ${generateRandom(20, 40)}px 2px rgb(41, 67, 216)`
}
