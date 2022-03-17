function highAndLow(numbers){
    const arr = numbers.split(' ');
    arr.sort( (a,b) => b - a );
    const b = arr.shift();
    const a = arr.pop();
    return `${a} ${b}`;
}