import runGame from '../index.js'

const randomNum = () => Math.floor(Math.random() * 100)
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const generateRound = () => {
  const number1 = randomNum()
  const number2 = randomNum()
  const operators = Object.keys(operations)
  const randomSymbol = operators[Math.floor(Math.random() * operators.length)]
  const correctAnswer = operations[randomSymbol](number1, number2)

  return [`${number1} ${randomSymbol} ${number2}`, String(correctAnswer)]
}

const gameDescription = 'What is the result of the expression?'
export default () => runGame(gameDescription, generateRound)
