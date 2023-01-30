// Callbacks Review

// A callback function is a function passed into another function.
// The callback function gets called FOR YOU, later, at some point in time.

// Javascript is asynchronous: things can happen out of order

// A C ... B
console.log('A');
setTimeout(function () {
    console.log('B: Time has passed...');
}, 5000);
console.log('C');

// Event handlers: 1 and 3 AND THEN MAYBE 2 (AND MAYBE MORE THAN ONCE)
console.log('1');
document.addEventListener('click', function () {
    console.log('2 somebody clicked');
});
console.log('3');

/////////////////////////////////////////////////////////////////////
// You are not expected to understand this (yet)
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (let i = 0; i < colors.length; i++) {
    console.log( colors[i] );
}

// ES5
// .forEach was added to JS
colors.forEach(function (color) {
    console.log(color);
});

// DIY each function
const each = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item);
    }
};

each(colors, function (color) {
    console.log(color);
});

