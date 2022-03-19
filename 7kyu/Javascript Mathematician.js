function calculate(...a) {
    return function (...b){
        return [...a,...b].reduce((surrentSum,currentNumber) => surrentSum + currentNumber)
    }
}