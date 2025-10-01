import runGame from "../index.js";

const randomNum = (max) => Math.floor(Math.random() * max);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = randomNum(100);
  const correctAnswer = isPrime(num) ? "yes" : "no";
  return [num, String(correctAnswer)];
};

const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => runGame(gameDescription, generateRound);
