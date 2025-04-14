import readlineSync from 'readline-sync';
import {userName} from './cli.js';
import gameCalc from './games/gameCalc.js';
import gameEven from './games/gameEven.js';

const launchGame = (game) => {
    let correctAnswer = '';
    let count = 0;

      
    for (let i = 1; i <= 3; i += 1) {
        switch (game) {
            case 'brain-even':
                correctAnswer = gameEven(count);
                break;
            case 'brain-calc':
                correctAnswer = gameCalc(count);
                break;
        }
        const userAnswer = readlineSync.question(`Your answer: `);

        if (userAnswer == correctAnswer) {
            count += 1; 
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return false;
        }

        if (count === 3) {
            console.log(`Congratulations, ${userName}!`);
            break;
        }

    }
    
};

export default launchGame;