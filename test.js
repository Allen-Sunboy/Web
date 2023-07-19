// 定义全局变量 a
var a;

// 第一个函数使用并修改变量 a
function function1() {
  console.log("函数1中的 a 值为：" + a);
  a = 10; // 修改变量 a 的值
}

// 第二个函数使用并修改变量 a
function function2() {
  console.log("函数2中的 a 值为：" + a);
  a += 10; // 修改变量 a 的值
}

// 调用函数
function1();
function2();

// 输出最终的 a 值
console.log("最终的 a 值为：" + a);
