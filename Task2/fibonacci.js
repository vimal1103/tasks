function fibonacciSeries(maxNumber) {
    let fibArray = [0, 1];
    let nextTerm = 0;

    while (nextTerm < maxNumber) {
        nextTerm = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        if (nextTerm < maxNumber) {
            fibArray.push(nextTerm);
        }
    }

    return fibArray;
}

// Example: Print Fibonacci series up to the number less than 50
let maxNumber = 100;
let fibSeries = fibonacciSeries(maxNumber);

console.log(fibSeries.join(', '));



