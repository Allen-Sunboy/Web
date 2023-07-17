// 在 Worker 中执行代码
// worker.js
self.onmessage = function (event) {
    console.log('Received message in worker:', event.data);
    // 执行计算密集型任务
    const result = doSomeHeavyWork();
    // 向主线程发送消息
    self.postMessage({ result });
};

function doSomeHeavyWork() {
    // 执行计算密集型任务
    return 42;
}
