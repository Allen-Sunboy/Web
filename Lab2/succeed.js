window.onload = function() {
    var queryString = location.search;
    var params = new URLSearchParams(queryString);
    var uname = params.get('uname');
    document.getElementById('uname').innerHTML = uname;
}

function logout() {
    location.href = 'index.html';
}
