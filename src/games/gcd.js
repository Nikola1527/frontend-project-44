import runGame from '../index.js';

const randomNum = () => Math.floor(Math.random() * 100);

const findGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
return findGCD(b, a % b);
}
  
const generateRound = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const question = `${num1} ${num2}`;
  const answer = findGCD(num1, num2).toString();
  return [question, answer];
};

export default () => runGame(generateRound)
