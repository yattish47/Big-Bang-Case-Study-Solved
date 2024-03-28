const fs = require('fs'); // imports node.js file system module

const result = []; // initialize an empty array to store the result

for (let i = 1; i <= 100; i++) { // loop through numbers from 1 to 100
  result.push(   // push the result of the ternary operator to the result array
    (i % 15 === 0) ? "BIGBANG" : // Check for divisibility by 15 first, 15 is the LCM of 3 and 5
      (i % 3 === 0) ? "BIG" : (i % 5 === 0) ? "BANG" : i.toString() // Check for divisibility by 3 and 5, else return the current number
  );
}

fs.writeFile('output.json', JSON.stringify(result, null, 2), (err) => { // write the result array to a file named output.json
  if (err) { // handle error if any
    console.error(err); // log the error to the console
  } else { // if no error, log success message to the console
    console.log("Result written to output.json");
  }
});
