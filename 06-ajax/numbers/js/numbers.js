const fetchFact = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // too soon!
        }

        const data = JSON.parse( xhr.responseText ); // turn the string into a JS object

        console.log(data);

        const p = document.createElement('p');
        p.innerText = data.text;
        document.body.appendChild(p);
    };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact for free
