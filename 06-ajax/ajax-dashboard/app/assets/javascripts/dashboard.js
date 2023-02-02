const fetchInfo = function () {
    $.ajax('/api/info').done(function (info) {
        console.log(info);
        $('#brother').text(info.brother);
        $('#time').text(info.time);
        $('#uptime').text(info.uptime);
        $('#calls').text(info.calls);

        $('#butterflies').empty();
        info.butterflies.forEach(function (butterfly) {
            const $div = $('<div></div>');
            $div.append(`<h2>${ butterfly.name }</h2>`);
            $div.append(`<h3>Family: ${ butterfly.family }</h3>`);
            $div.append(`<img src="${ butterfly.image }" width="200">`);

            $div.appendTo('#butterflies');
        });
    });
};

setInterval(fetchInfo, 2000);

// const fetchBrother = function () {
//     $.ajax('/api/brother').done(function (name) {
//         $('#brother').text(name);
//     });
// };

// setInterval(fetchBrother, 3000);

// const fetchTime = function () {
//     $.ajax('/api/time').done(function (time) {
//         $('#current-time').text(time);
//     });
// };

// setInterval(fetchTime, 1000);

// const fetchUptime = function () {
//     $.ajax('/api/uptime').done(function (uptime) {
//         $('#current-uptime').text(uptime);
//     });
// };

// setInterval(fetchUptime, 2000);

// const fetchCalls = function () {
//     $.ajax('/api/calls').done(function (calls) {
//         $('#calls').text(calls);
//     });
// };

// setInterval(fetchCalls, 7000);
