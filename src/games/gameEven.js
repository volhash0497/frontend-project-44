import countAnswers from '../index.js';

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

const gameEven = (count) => {
    if (count === 0) {
        console.log('Answer "yes" if the number is even, otherwise answer "no".');    
    }
    const max = 100;
    let num = Math.floor(Math.random() * max);
    const correctAnswer = isNumberEven(num);
    let expression = num;
    console.log(`Question: ${expression}`);
    return correctAnswer;

};

export default gameEven;