const fetchFact = function () {
    $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
        $('body').append(`<p>${ result.text }</p>`);
    });
};

$('#fetch').on('click', fetchFact);
fetchFact(); // First fact for free
