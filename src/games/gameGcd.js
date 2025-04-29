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

const gameGcd = (count) => {
  if (count === 0) {
    console.log('Find the greatest common divisor of given numbers.')
  }
  const maxNum = 100
  const num1 = Math.floor(Math.random() * maxNum)
  const num2 = Math.floor(Math.random() * maxNum)
  const correctAnswer = findGcd(num1, num2).toString()
  const expression = `${num1} ${num2}`
  console.log(`Question: ${expression}`)

  return correctAnswer
}

export default gameGcd
