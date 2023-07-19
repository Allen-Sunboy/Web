# 实验3说明文档

杨楠 2021010711 yangn21@mails.tsinghua.edu.cn

## 1 实现思路

使用localStorage来存储某用户名对应的密码和已用时间，每个键值对就是一个用户的信息，key是uname，value是一个js对象，存有两个键值对，分别为password和duration。

首先判断如果用户名或密码为空，那么alert。否则，在localStorage查找是否有该uname。如果没有，那么新建一个对象，duration初始化为0，将数据存入localStorage登录成功。如果有，那么比较密码是否一致，如果一致就登录成功。

关于用户名的显示，同样使用作业二的做法，将uname作为参数传递到url并且读取。

```js
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
```

一旦登录成功，跳转到succeed.html界面。使用`update()`函数更新已连接时间。

```js
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
```

流量条和流量值显示为上次断开连接时的已用值。如果是第一次登录，由于duration已经初始化为0，那么就是显示为0。最大显示50G，所以对duration的值进行判定。

点击断开连接按钮，会退出登录，在`logout()`函数中，更新duration存回localStorage中。

```js
function logout() {
    userInfo.duration += time;
    userInfo = JSON.stringify(userInfo);
    localStorage.setItem(uname, userInfo);
    location.href = 'index.html';
}
```

## 2 使用说明

打开index.html，在登录界面，输入用户名和密码后，点击“连接”按钮。如果用户名或密码为空，那么弹出提示。如果用户名是首次使用，或者用户名和密码相符，那么直接跳转到succeed.html。如果密码不符，那么弹出提示。

登录后，连接时间从0开始计时。流量条的长度和流量值由duration决定。如果算得流量超过50G，那么最大就是显示50G。

点击“断开连接”按钮，会返回登录界面。

如有需要，可以在浏览器的开发者工具-应用-本地存储空间-file:///，查看localStorage的内容，自行添加或者删除键值对。

## 3 遇到的问题及解决办法

关于保存用户数据的问题。经过查资料，使用了localStorage这种方式，方便存储用户信息。

关于流量显示的问题，原先即使只是使用简单的乘法计算，由于浮点数的特性，以及js对浮点数的处理，导致计算结果可能会出现特殊情况，比如计算`3.33 * 7`的结果，会是`23.310000000000002`。所以需要设置显示位数精度，本作业中设置为了2位小数。

## 4 参考资料

[https://developer.mozilla.org/zh-CN/docs/Web](https://developer.mozilla.org/zh-CN/docs/Web)

关于localStorage：[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

关于JSON对象的操作：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
