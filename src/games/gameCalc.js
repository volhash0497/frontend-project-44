import engine from '../index.js'
import randomNumFromInterval from '../getRandomNumber.js'

const chooseSign = (num) => {
  let sign = ''
  switch (num) {
    case 0:
      sign = '+'
      break
    case 1:
      sign = '-'
      break
    case 2:
      sign = '*'
      break
    default:
      sign = '+'
      break
  }
  return sign
}

const compute = (firstNum, sign, secondNum) => {
  let result = 0
  switch (sign) {
    case '+':
      result = firstNum + secondNum
      break
    case '-':
      result = firstNum - secondNum
      break
    case '*':
      result = firstNum * secondNum
      break
    default:
      break
  }
  return result
}

const question = ('What is the result of the expression?')

const getData = () => {
  const num1 = randomNumFromInterval(20, 50)
  const num2 = randomNumFromInterval(0, 20)
  const signNum = randomNumFromInterval(0, 3)
  const sign = chooseSign(signNum)
  const correctAnswer = compute(num1, sign, num2).toString()
  const expression = `${num1} ${sign} ${num2}`

  return [expression, correctAnswer]
}

const startGameCalc = () => engine(getData, question)

export default startGameCalc
