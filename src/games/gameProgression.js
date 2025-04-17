const getProgression = () => {
    const array = [];
    const minNum = 5;
    const maxNum = 10;
    const minD = 2;
    const maxD = 9;
    const minFirst = 5;
    const maxFirst = 15;
    const num = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    const d = Math.floor(Math.random() * (maxD - minD) + minD);
    const first = Math.floor(Math.random() * (maxFirst - minFirst) + minFirst);
    array.push(first);
    for (let i = 2; i < num; i += 1) {
        const el = (i - 1) * d + first;
        array.push(el);
    }
    return array;
};

const gameProgression = (count) => {
    if (count === 0) {
        console.log('What number is missing in the progression?'); 
    }
    const array = getProgression(); 
    const minPos = 0;
    const maxPos = array.length - 1;
    const pos = Math.floor(Math.random() * (maxPos - minPos) + minPos);
    const correctAnswer = array[pos].toString();
    array.splice(pos, 1, ".."); 
    
    let expression = array.join(' ');
    console.log(`Question: ${expression}`);
    
    return correctAnswer;
        
};

export default gameProgression;