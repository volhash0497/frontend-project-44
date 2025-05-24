import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const findGcd = (num1, num2) => {
  let divider = 0
  const minNum = Math.min(num1, num2)
  for (let i = 1; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divider = i
    }
  }

  return divider
}

const question = ('Find the greatest common divisor of given numbers.')

const getData = () => {
  const num1 = randomNumFromInterval(0, 100)
  const num2 = randomNumFromInterval(0, 100)
  const correctAnswer = findGcd(num1, num2).toString()
  const expression = `${num1} ${num2}`

  return [expression, correctAnswer]
}

const startGameGcd = () => engine(getData, question)

export default startGameGcd
