#!/usr/bin/env node
import readlineSync from "readline-sync";

const isEven = (num) => num % 2 === 0;

const runEvenGames = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    const correctAnswer = isEven(question) ? "yes" : "no";

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
};

runEvenGames();
