import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const checkPrimeOrNot = (num) => {
  let prime = 'yes'
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      prime = 'no'
    }
  }
  return prime
}

const question = ('Answer "yes" if given number is prime. Otherwise answer "no".')

const getData = () => {
  const expression = randomNumFromInterval(2, 50)
  const correctAnswer = checkPrimeOrNot(expression).toString()

  return [expression, correctAnswer]
}

const startGamePrime = () => engine(getData, question)

export default startGamePrime
