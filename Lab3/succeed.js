var uname;
var userInfo;
var time = 0;

window.onload = function() {
    start = Date.now();
    var queryString = location.search;
    var params = new URLSearchParams(queryString);
    uname = params.get('uname');
    document.getElementById('uname').innerHTML = uname;

    userInfo = localStorage.getItem(uname);
    userInfo = JSON.parse(userInfo);
    var duration = userInfo.duration;

    // 流量条50G的长度为264px
    if (duration === 0) {
        document.getElementById('usage_value').style.width = '0';
        document.getElementById('value').innerHTML = 0;
    }
    else if (duration * 3.33 < 50) {
        document.getElementById('usage_value').style.width = (264 * (duration * 3.33 / 50)).toString() + 'px';
        document.getElementById('value').innerHTML = (duration * 3.33).toFixed(2) + 'G';
    }
    else {
        document.getElementById('usage_value').style.width = '264px';
        document.getElementById('value').innerHTML = '50G';
    }

    // 时间高位补0
    function full(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function update() {
        time++;
        var hour = Math.floor(time / 3600);
        var minute = Math.floor((time % 3600) / 60);
        var second = time % 60;
        document.getElementById('clock').innerHTML = full(hour) + ':' + full(minute) + ':' + full(second);
    }

    setInterval(update, 1000);
}

function logout() {
    userInfo.duration += time;
    userInfo = JSON.stringify(userInfo);
    localStorage.setItem(uname, userInfo);
    location.href = 'index.html';
}
