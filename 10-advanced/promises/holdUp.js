// setTimeout expects a callback -- it does not Promise
// task: wrap setTimeout in a Promise (so it works with .then)

const holdUp = function (duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
};

// Alternatives:
// const holdUp = (duration) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, duration);
//     });
// };

// No curlies: implicit return:
// const holdUp = (duration) => new Promise((resolve) => {
//     setTimeout(resolve, duration);
// });

// No curlies, no return: implicit return all the way down:
// const holdUp = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

// Make this code work:
holdUp(3000).then(function () {
    console.log('time has passed');
}).then(function () {
    console.log('this appears too');
});