// function fibonacciSeries(maxNumber) {
//     let fibArray = [0, 1];
//     let nextTerm = 0;

//     while (nextTerm < maxNumber) {
//         nextTerm = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
//         if (nextTerm < maxNumber) {
//             fibArray.push(nextTerm);
//         }
//     }

//     return fibArray;
// }

// // Example: Print Fibonacci series up to the number less than 50
// let maxNumber = 1000;
// let fibSeries = fibonacciSeries(maxNumber);

// console.log(fibSeries.join(', '));


const readline = require('readline');

// Create an interface to read from the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate Fibonacci series up to the specified maxNumber.
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

// Ask the user to enter a number in the terminal.
rl.question('Enter a number to generate Fibonacci series up to: ', (userInput) => {
    // Parse the user input to a number.
    const maxNumber = parseInt(userInput);

    // Check if the input is a valid number.
    if (isNaN(maxNumber)) {
        console.log('Please enter a valid number.');
        rl.close();
    } else {
        // Generate the Fibonacci series and print it.
        const fibSeries = fibonacciSeries(maxNumber);
        console.log('Fibonacci series up to', maxNumber, ':', fibSeries.join(', '));
        rl.close();
    }
});
