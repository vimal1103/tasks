// Get user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please enter your lucky number: ', luckyNumber => {
    // Print the pattern
    printPattern(luckyNumber);
  
    readline.close();
  });
  
  function printPattern(num) {
    // Initialize variables
    let alphabet = 'A';
    let pattern = '';
  
    // Loop through the rows
    for (let i = 1; i <= num; i++) {
      // Print the first part of the row
      if (i % 2 === 1) {
        pattern += printRowPart1(i, num);
      }
  
      // Print the second part of the row
      if (i < num) {
        pattern += printRowPart2(i, num, alphabet);
      }
  
      // Add a newline character
      pattern += '\n';
    }
  
    // Print the final pattern
    console.log(pattern);
  }
  
  function printRowPart1(start, end) {
    let row = '';
  
    // Loop through the numbers
    for (let i = start; i <= end; i += 2) {
      row += i + ' ';
    }
  
    return row;
  }
  
  function printRowPart2(start, end, alphabet) {
    let row = '';
  
    // Loop through the letters
    for (let i = start; i <= end; i += 2) {
      row += i + ' ' + alphabet + ' ';
      alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
    }
  
    return row;
  }