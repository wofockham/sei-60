// 1. callbacks
// 2. Promises -> .then
// 3. Promise -> await -- write code that looks synchronous

const fs = require('fs');
const { Readline } = require('readline/promises');

const readFile = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                reject(err); // call all the .catch callbacks
                return;
            }
            resolve(data); // call all the .then callbacks
        });
    });
};

readFile('flintstones.txt').then(function (data) {
    console.log(data);
});

// You can await the results of a promise IF the await is in an async function
const logFlintstones = async function () {
    const data = await readFile('flintstones.txt');
    console.log(data);
};

logFlintstones();

// axios example ////////////////////////////////////////////////////
const axios = require('axios');

axios.get('http://numbersapi.com/random/trivia').then((response) => {
    console.log(response.data);
});

const numberFact = async () => {
    const response = await axios.get('http://numbersapi.com/random/trivia');
    console.log( response.data );
};

numberFact();
