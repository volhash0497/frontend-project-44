const chooseSign = (num) => {
    let sign = '';
    switch (num) {
        case 0:
            sign = '+';
            break;
        case 1:
            sign = '-';
            break;
        case 2:
            sign = '*';
            break;
        default:
            break;
    }
    return sign;
}

const compute = (firstNum, sign, secondNum) => {
    let result = 0;
    switch (sign) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        default:
            break;
    }
    return result;

}

const gameCalc = (count) => {
    if (count === 0) {
        console.log('What is the result of the expression?'); 
    }
    const minNum = 20;
    const maxNum = 50;
    const maxSign = 3;
    let num1 = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    let num2 = Math.floor(Math.random() * minNum);
    let signNum = Math.floor(Math.random() * maxSign)
    let sign = chooseSign(signNum);
    const correctAnswer = compute(num1, sign, num2).toString();
    let expression = `${num1} ${sign} ${num2}`;
    console.log(`Question: ${expression}`);
    
    return correctAnswer;
        
};

export default gameCalc;
