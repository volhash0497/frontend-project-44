import readlineSync from 'readline-sync';

const userName = '';

const askName = () => {
    console.log("Welcome to the Brain Games!");
    userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export default askName;
export {userName};