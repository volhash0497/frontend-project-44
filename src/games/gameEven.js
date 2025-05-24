import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const isNumberEven = num % 2 === 0 ? true : false

const question = ('Answer "yes" if the number is even, otherwise answer "no".')

const getData = () => {
  const expression = randomNumFromInterval(0, 100)
  const correctAnswer = isNumberEven(expression) ? 'yes' : 'no'

  return [expression, correctAnswer]
}

const startGameEven = () => engine(getData, question)

export default startGameEven
