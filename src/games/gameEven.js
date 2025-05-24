import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const isNumberEven = num => num % 2 === 0 ? 'yes' : 'no'

const question = ('Answer "yes" if the number is even, otherwise answer "no".')

const getData = () => {
  const expression = randomNumFromInterval(0, 100)
  const correctAnswer = isNumberEven(expression)

  return [expression, correctAnswer]
}

const startGameEven = () => engine(getData, question)

export default startGameEven
