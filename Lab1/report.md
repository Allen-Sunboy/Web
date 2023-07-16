# 实验1说明文档

杨楠 2021010711 yangn21@mails.tsinghua.edu.cn

## 1 实现思路

页面的整体布局：在body的main中，依次放置welcome（橙色的欢迎区域，即最底层），triangle（左下角的橙色三角形），info（中间白色的有文字区域），corner（右侧的一个小的灰色三角形），connect_button（右下角“断开连接”按钮所在的区域），links（右下角4个外部链接）。

在info中，依次放置uname（用户名）和content（包括连接时长，已用流量，流量条等内容）。

image文件夹中，是网站所用的图片，主要是来自官方页面的图片。

适当参考了官方页面的源码。主要是查询某个区块的尺寸数据，查询特定文字所用的字体，等等。

关于区块的颜色，使用取色器的方式，或者参考源码，两种获取的结果是一致的。

关于“断开连接”按钮，使用的是官方页面的图片样式。并且设置了能在鼠标悬停和点击的状态时，按钮的样式发生变化（分别设置的是hover和active）。由于官方同一张图片自带了几种不同按钮样式，在具体实现时，实质就是图片展示位置position的变化。

```css
.disconnect:hover {
    background-color: #d6d2e0;
    background-position: center -47px;
}

.disconnect:active {
    background-color: #b1aac4;
    background-position: center -94px;
}
```

网页的标题和图标icon也设置为跟官方网页相同的标题和icon。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

这个是设置设备适应。


## 2 使用说明

打开index.html，即可查看页面。

关于“断开连接”的按钮，可以通过鼠标悬停、点击等方式，查看样式的变化。

右下角的四个link外部链接都可以点击查看，会弹出一个新的窗口，加载相应的网址。


## 3 遇到的问题及解决办法

网页的背景并不是纯白色，这个可以用取色器进行验证，或者参考官方页面的源代码进行比对。注意到网页右上角的渐变色，官方页面是贴图。我在调试的时候由于位置没放对，以及背景色没调好，导致效果不佳，后来进行修改才调好。

在自己电脑浏览器登录官方网页，会看到右下角的四个链接图标并非排成一行，第四个会位于上一行的右下方的位置。这可能是官方页面自身的bug，而自己写的网址处理了这一问题，四个link以及图标能排成一行。


## 参考资料

[https://net.tsinghua.edu.cn/wireless/](https://net.tsinghua.edu.cn/wireless/)页面登录后的源代码

[https://developer.mozilla.org/zh-CN/docs/Web](https://developer.mozilla.org/zh-CN/docs/Web)
