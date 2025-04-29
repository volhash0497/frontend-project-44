const checkPrimeOrNot = (num) => {
  let prime = 'yes'
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      prime = 'no'
    }
  }
  return prime
}

const gamePrime = (count) => {
  if (count === 0) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  }
  const minNum = 2
  const maxNum = 50
  const num = Math.floor(Math.random() * (maxNum - minNum) + minNum)
  const expression = num
  console.log(`Question: ${expression}`)
  const correctAnswer = checkPrimeOrNot(num).toString()

  return correctAnswer
}

export default gamePrime
