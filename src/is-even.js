import readlineSync from 'readline-sync';
import {userName} from './cli.js';

const isNumberEven = (num) => {
    const divider = 2;
    let correctAnswer = '';
    if (Number.isInteger(num) && num % divider === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    }
    
    return correctAnswer;
};

const countAnswers = () => {
    let count = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= 3; i += 1) {
        const max = 100;
        const num = Math.floor(Math.random() * max);
        const correctAnswer = isNumberEven(num);
        console.log(`Question: ${num}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        if (userAnswer === correctAnswer) {
            count += 1; 
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }

        if (count === 3) {
            console.log(`Congratulations, ${userName}!`);
            break;
        }
    }

};

export default countAnswers;