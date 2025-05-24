import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const getProgression = (first, d, num) => {
  const array = []

  array.push(first)
  for (let i = 2; i <= num; i += 1) {
    const el = (i - 1) * d + first
    array.push(el)
  }
  return array
}

const question = ('What number is missing in the progression?')

const getData = () => {
  const num = randomNumFromInterval(5, 10)
  const d = randomNumFromInterval(2, 9)
  const firstEl = randomNumFromInterval(5, 15)
  const array = getProgression(firstEl, d, num)
  const maxPos = array.length - 1
  const pos = randomNumFromInterval(0, maxPos)
  const correctAnswer = array[pos].toString()
  array.splice(pos, 1, '..')
  const expression = array.join(' ')

  return [expression, correctAnswer]
}

const startGameProgression = () => engine(getData, question)

export default startGameProgression
