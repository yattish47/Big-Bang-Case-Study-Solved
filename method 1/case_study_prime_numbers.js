const fs = require('fs'); // import node.js file system module

// Function to generate the array of numbers from 1 to 100
function generateArray() { 
  const result = []; // Initialize an empty array
  for (let i = 1; i <= 100; i++) { // Loop through numbers from 1 to 100 with increment of 1
    if (i % 3 === 0 && i % 5 === 0) { // Check if the number is divisible by both 3 and 5
      result.push('BIGBANG'); // If true, push 'BIGBANG' to the array
    } else if (i % 3 === 0) { // Check if the number is divisible by 3
      result.push('BIG'); // If true, push 'BIG' to the array
    } else if (i % 5 === 0) { // Check if the number is divisible by 5
      result.push('BANG'); // If true, push 'BANG' to the array
    } else { // If the number is not divisible by 3 or 5
      result.push(i.toString()); // Push the current number as a string to the array
    } 
  }
  return result; // Return the array
}

// Call the function to generate the array and store it in a variable
const outputArray = generateArray(); 

// Write the array to output.json file
fs.writeFile('output.json', JSON.stringify(outputArray), (err) => { // Convert the array to a JSON string and write it to output.json
  if (err) throw err; // If there is an error, throw an error
  console.log('Output has been saved to output.json'); // Log a message to the console
});

