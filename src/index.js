import readlineSync from 'readline-sync';

const runGame = (generateRound) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    const rounds = 3;
    for (let i = 0; i < rounds; i += 1) {
	const [question, correctAnswer] = generateRound();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');

      if (answer !== correctAnswer) {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}`);
        console.log(`Let's try again, ${name}!`);
        return;
      };

    console.log('Correct!');
    };
console.log(`Congratulations, ${name}!`);
};

export default runGame;
