# 实验4说明文档

杨楠 2021010711 yangn21@mails.tsinghua.edu.cn

## 1 实现思路

在app.js中，分别实现了课程列表查询接口和随机课程推荐接口。在请求中获取`major`参数。如果`major`不为空，那么使用`find()`方法在`COURSE_MAJOR_MAP_LIST`中查找是否有相应`major`值。如果有，那么获取相应的`courseList`数组，作为相应。

对于随机课程推荐接口，使用`Math.random()`方法，从`courseList`中随机获取一门课程，作为相应。

使用中间件，改写了`res.send()`方法，对于接口的返回格式进行统一处理。

```js
// 使用中间件
app.use((req, res, next) => {
    // 改写res.send方法，对于接口的返回格式进行统一处理
    res.sendRes = (success, data, message) => {
        const responseData = {
            success: success,
            data: data,
            message: message,
        }
        res.send(responseData);
    };
    next();
});
```

## 2 使用说明

在终端输入以下命令：

```bash
node src/app.js
```

正常情况，终端会输出服务器运行地址。

```
服务器运行于：http://localhost:8989
```

点击之后，通过修改网址后参数的方式来使用接口。

如果要访问课程列表查询接口，那么网址的形式就是：`http://localhost:8989/api/course_list?major=软件工程`，可以将这里的“软件工程”换成别的专业。这里以软件工程为例，网页的显示内容应该为：

```json
{
    "success": true,
    "data": [
        "计算机网络",
        "信息科学技术概论",
        "数据结构",
        "物联网导论",
        "软件工程前沿技术"
    ],
    "message": ""
}
```

如果要访问随机课程推荐接口，那么网址的形式就是：`http://localhost:8989/api/course_recommend?major=软件工程`，可以将这里的“软件工程”换成别的专业。每次`data`的值是随机的。这里以软件工程为例，在某次访问中，网页的显示内容为：

```json
{
    "success": true,
    "data": "计算机网络",
    "message": ""
}
```

上述查询中，如果请求缺少参数`major`，那么网页的显示应当为：

```json
{
    "success": false,
    "data": {},
    "message": "缺少参数major"
}
```

如果`major`的值不在`COURSE_MAJOR_MAP_LIST`所列的专业中，比如，访问`http://localhost:8989/api/course_list?major=自动化`，那么网页的显示应当为：

```json
{
    "success": false,
    "data": {},
    "message": "未找到该专业的课程列表"
}
```

## 3 遇到的问题及解决办法

关于如何使用中间件的问题。通过查阅资料，得知应当使用`app.use()`方法，并且改写了`res.send()`方法。

关于如何引入courseList.js的问题，文件中说要用`import`方法。但在默认设置下，node/express是不能直接使用`import`的，需要在package.json中，添加键值对`"type": "module"`。这样，原先对express的引入方式也得进行改变，从一般的

```js
const express = require('express');
```

改写为

```js
import express from 'express'
```

## 4 参考资料

[https://developer.mozilla.org/zh-CN/docs/Web](https://developer.mozilla.org/zh-CN/docs/Web)

其中，关于Express/Node的内容：[https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction)

[https://expressjs.com/](https://expressjs.com/)

其中，关于app.use()的内容：[https://expressjs.com/en/4x/api.html#app.use](https://expressjs.com/en/4x/api.html#app.use)
