import runGame from "../index.js";

const randomNum = (max) => Math.floor(Math.random() * max);

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const currentElement = start + i * step;
    progression.push(currentElement);
  }
  return progression;
};

const generateRound = () => {
  const start = randomNum(10) + 1;
  const step = randomNum(10) + 1;
  const length = 10;

  const progression = generateProgression(start, step, length);
  const hiddenIndex = randomNum(length);
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = "..";

  return [progression.join(" "), String(correctAnswer)];
};

export default () => runGame(generateRound);
