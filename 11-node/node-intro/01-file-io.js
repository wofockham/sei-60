// recreate `cat` in JS

const fs = require('fs'); // fs is from the built-in Node.js standard library

// Synchronous: wrong! Not enough callbacks
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous: "the right way"
// Many asynchronous Node.js functions implement the Error First Pattern
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error);
    }
    console.log(data);
    console.log('thank you for using this program');
});
