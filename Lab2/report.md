# 实验2说明文档

杨楠 2021010711 yangn21@mails.tsinghua.edu.cn

## 1 实现思路

首先是实现作业二的页面index.html，之前作业一的页面在本作业中命名为succeed.html。

在body的main中，依次放置logo（左上角清华大学无线校园网），qrcode（右上角二维码），attsinghua（右上角At Tsinghua），content（中间的主体界面），foot（底部信息）。

在content中，依次放置hi（橙色背景），triangle_left（左下角橙色三角形），notice_box（左侧通知栏），login（右侧登录界面，主体为表单，包括用户名，密码，连接按钮），triangle_right（右下角白色三角形），download（左下角下载客户端），menu（右下角菜单）。

关于登录的功能，设置按钮点击会触发`login()`，由`login()`将用户名uname传递给succeed.html。

```js
function login() {
    var uname = document.getElementById('uname').value;
    var password = document.getElementById('password').value;

    if(uname == "" || password == "") {
        alert("用户名或密码为空");
    }
    else {
        window.location.href = 'succeed.html?uname=' + uname;
    }
}
```

跳转到succeed.html后，获取uname的值，将其写入页面中。

```js
window.onload = function() {
    var queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let uname = params.get('uname');
    document.getElementById('uname').innerHTML = uname;
}
```

在succeed.html中，设置按钮点击触发`logout()`，将页面跳转到index.html。

```js
function logout() {
    window.location.href = 'index.html';
}
```

## 2 使用说明

打开index.html，即为登录界面。

输入任意的用户名和密码，点击连接按钮。如果两者都非空，那么跳转到succeed.html并且显示输入的用户名。否则，弹出alert提示用户名或密码为空。

在succeed.html时，点击断开连接按钮，即可返回index.html界面。


## 3 遇到的问题及解决办法

关于判断用户名或密码是否为空，最开始是将其与`null`或者`undefined`比较，结果不能正确实现功能。原因是如果输入框没有填写内容，那么获取的字符串应该是空串`""`，而不是`null`。应当是与空串比较。

## 参考资料

[https://net.tsinghua.edu.cn/wireless/](https://net.tsinghua.edu.cn/wireless/) 该页面的源代码

[https://developer.mozilla.org/zh-CN/docs/Web](https://developer.mozilla.org/zh-CN/docs/Web)
