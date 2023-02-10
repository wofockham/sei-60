// Promises are an evolution of callbacks:
// a way to handle or process data from an asynchronous process, whenever that finishes.

// recreate cat in JS:
const fs = require('fs');

// fs.readFile('flintstones.txt', 'utf-8', function (err, data) { // error first pattern
//     if (err) {
//         throw err; // dramatic return
//     }

//     console.log(data);
//     console.log('thanks for using this program. please give me money');
// });

// If a library uses Promises YOU NEED TO USE .then

// A Promise wrapper around the above fs.readFile

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

readFile('flintstones.txt').then(function (content) {
    console.log(content);
}).catch(function (err) {
    console.error('there was error', err);
});

// You can attach multiple separate callbacks: .then().then().then().then()

// You can even attach new callbacks later (and they'll still run)

const flintstonesPromise = readFile('flintstones.txt');
flintstonesPromise.then(function (c) {
    console.log(c);
});

setTimeout(function () {
    flintstonesPromise.then(function (data) {
        console.log('6 seconds later, the file is closed and yet');
        console.log(data);
    });
}, 6000);
