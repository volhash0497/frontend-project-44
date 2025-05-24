import readlineSync from 'readline-sync'
import askName from '../src/cli.js'

const engine = (getData, question) => {
  const userName = askName()
  console.log(question)

  const roundCounts = 3

  for (let i = 1; i <= roundCounts; i += 1) {
    const [expression, correctAnswer] = getData()

    console.log(`Question: ${expression}`)
    const userAnswer = readlineSync.question(`Your answer: `)

    if (userAnswer == correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return false
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default engine
