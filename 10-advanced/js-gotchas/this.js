// `this` lets you access the current object (or the containing object)
// from a method without needing to know the name of the variable containing
// the object.

const groucho = {
    fullname: 'Groucho Julius Marx',
    greeting: function () {
        return `Good evening, my name is ${ this.fullname }`;
    }
};

console.log( 'Calling the method', groucho.greeting() );

// What if we copy the method from inside the object?
// What if we convert the method into a regular function?

const unboundGreeting = groucho.greeting;
console.log( 'Calling the unbound function', unboundGreeting() ); // My name is undefined

// bind() ///////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log( 'Calling the bound function', boundGreeting() );

const otherGreeting = groucho.greeting.bind({ fullname: 'Harpo Marx' });
console.log( 'Hi Harpo', otherGreeting() );

// call() ///////////////////////////////////////////////////////////
console.log( 'call()', unboundGreeting.call( groucho ) );
console.log( 'call()', unboundGreeting.call( {fullname: 'Chico Marx'} ) );

// apply() //////////////////////////////////////////////////////////
console.log( 'apply()', unboundGreeting.apply( groucho ) );
console.log( 'apply()', unboundGreeting.apply( {fullname: 'Chico Marx'} ) );

const numbers = [56, 11, 23, 10];
console.log( Math.max( numbers ) ); // NaN because .max is not expecting an array!
console.log( Math.max.apply("whatever", numbers) );

// Modern fix: ES6
console.log( Math.max(...numbers) ); // 56, thanks to the spread operator