import { COURSE_MAJOR_MAP_LIST } from './courseList.js'
import express from 'express'
const app = express();

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

// 课程列表查询接口
app.get('/api/course_list', (req, res) => {
    const { major } = req.query;
    if (!major) {
        return res.sendRes(false, {}, '缺少参数major');
    }
    const courseList = COURSE_MAJOR_MAP_LIST.find(entry => entry.major === major)?.courseList || [];
    if (courseList.length === 0) {
        return res.sendRes(false, {}, '未找到该专业的课程列表');
    }

    res.sendRes(true, courseList, '');
});

// 随机课程推荐接口
app.get('/api/course_recommend', (req, res) => {
    const { major } = req.query;
    if (!major) {
        return res.sendRes(false, {}, '缺少参数 major');
    }
    const courseList = COURSE_MAJOR_MAP_LIST.find(entry => entry.major === major)?.courseList || [];
    if (courseList.length === 0) {
        return res.sendRes(false, {}, '未找到该专业的课程列表');
    }

    const randomCourse = courseList[Math.floor(Math.random() * courseList.length)];
    res.sendRes(true, randomCourse, '');
});

app.listen(8989, () => {
    console.log('服务器运行于：http://localhost:8989');
});
