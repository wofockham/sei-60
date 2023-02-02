const fetchBrother = function () {
    $.ajax('/api/brother').done(function (name) {
        $('#brother').text(name);
    });
};

setInterval(fetchBrother, 3000);

const fetchTime = function () {
    $.ajax('/api/time').done(function (time) {
        $('#current-time').text(time);
    });
};

setInterval(fetchTime, 1000);

const fetchUptime = function () {
    $.ajax('/api/uptime').done(function (uptime) {
        $('#current-uptime').text(uptime);
    });
};

setInterval(fetchUptime, 2000);

const fetchCalls = function () {
    $.ajax('/api/calls').done(function (calls) {
        $('#calls').text(calls);
    });
};

setInterval(fetchCalls, 7000);
