// let id = 0; // global variable: bad

// const nextID = function () {
//     return id++;
// };

// Higher Order Functions

// const helloMaker = function () {
//     const greeting = 'Hello World';

//     const f = function () {
//         console.log(greeting);
//     }

//     return f;
// };

// const hello = helloMaker();

// nextIDMaker returns the nextID function
const nextIDMaker = function () {
    let id = 0; // the ID will persist in a closure (but no one else can access it)

    return function () {
        return id++;
    }
};

const nextID = nextIDMaker();

/////////////////////////////////////////////////////////////////////
// const p = function (content) {
//     return `<p>${ content }</p>`;
// };

// const h1 = function (content) {
//     return `<h1>${ content }</h1>`;
// }

// const h2 = function (content) {
//     return `<h2>${ content }</h2>`;
// }

// const div = function (content) {
//     return `<div>${ content }</div>`;
// }

// const span = function (content) {
//     return `<span>${ content }</span>`;
// }

const tagFunctionMaker = function (tagName) {
    return function (content) {
        return `<${ tagName }>${ content }</${ tagName }>`;
    };
};

const p = tagFunctionMaker('p');
const h1 = tagFunctionMaker('h1');
const h2 = tagFunctionMaker('h2');
const div = tagFunctionMaker('div');
const span = tagFunctionMaker('span');
