function login() {
    var uname = document.getElementById('uname').value;
    var password = document.getElementById('password').value;

    if (uname == "" || password == "") {
        alert("用户名或密码为空");
    }
    else {
        location.href = 'succeed.html?uname=' + uname;
    }
}
