// // Later: use functions and make this interactive

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://numbersapi.com/random/trivia');
xhr.send(); // This line is asynchronous

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return; // too soon!
    }

    console.log('the ready state changed', xhr.readyState, xhr.responseText);
};

