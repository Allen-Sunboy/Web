function login() {
    var uname = document.getElementById('uname').value;
    var password = document.getElementById('password').value;

    if (uname == "" || password == "") {
        alert("用户名或密码为空");
        return;
    }

    var userInfo = localStorage.getItem(uname);

    if (userInfo === null) {
        var newInfo = {
            password: password, 
            duration: 0
        };
        localStorage.setItem(uname, JSON.stringify(newInfo));
        location.href = 'succeed.html?uname=' + uname;
        return;
    }
    else {
        userInfo = JSON.parse(userInfo);
        if (password !== userInfo.password) {
            alert("密码错误");
            return;
        }
        else {
            location.href = 'succeed.html?uname=' + uname;
            return;
        }
    }
}
