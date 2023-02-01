console.log( _.VERSION );

const nums = _.range(1, 20);

// .each() //////////////////////////////////////////////////////////
_(nums).each(function (n) {
    console.log(n);
});

// The docs prefer this style:
_.each(nums, function (n) {
    console.log(n);
});


// .each with objects
const sales = {
    January: 15,
    Februrary: 11,
    March: 3
};

// Note: value is passed in first, followed by the key:
_(sales).each(function (amount, month) {
    console.log(`In ${ month } the sales were ${ amount }`);
});

// .map() ///////////////////////////////////////////////////////////
const double = function (n) {
    return n * 2;
};

const a = [5, 6, 7, 8];
const b = _(a).map(double);

console.log(b);

// .map() for objects
const salesInfo = _(sales).map(function (amount, month) {
    return `For ${ month } the sales were ${ amount }`;
});

console.log(salesInfo);

// .reduce() ////////////////////////////////////////////////////////
// const total = _(nums).reduce(function (acc, n) {
//     return acc + n;
// });

const total = _(nums).reduce(function (runningTotal, n) {
    console.log(`running total: ${ runningTotal }, n: ${ n }, returning: ${ runningTotal + n }`);
    return runningTotal + n;
});

console.log(total);

// .reduce() also works for objects

// .find() //////////////////////////////////////////////////////////
const divisibleByFive = function (n) {
    console.log('considering', n);
    return n % 5 === 0;
}

const fivey = _(nums).find(divisibleByFive); // 5
console.log(fivey);

// .filter() ////////////////////////////////////////////////////////
const allFives = _(nums).filter(divisibleByFive);
console.log( allFives );

// .reject() ////////////////////////////////////////////////////////
const notFives = _(nums).reject(divisibleByFive);
console.log(notFives);

// .pluck() /////////////////////////////////////////////////////////
const bros = [
    {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
    {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
    {name: 'Chico', instrument: 'piano', disposition: 'lecherous'},
];

console.table(bros);

console.log( _(bros).pluck('instrument') );
