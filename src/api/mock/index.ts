// src/mock/index.js
import Mock from 'mockjs'  //导入mockjs

import test from './api/test'

const BASEURL = 'http://localhost:8080' // 设置基础api地址

const mockApi = [test] // 注册需要mock的模块

// 注册
mockApi.forEach((mockitem) => {
    mockitem.forEach((item) => {
        const { url, method, mockData } = item
        Mock.mock(BASEURL + url, method, mockData)
    })
})


//使用Mock下面提供的mock方法进行需要模拟数据的封装
// const testData = Mock.mock('http://localhost:8080/test', 'get', {
//     code: 0,
//     message: 'success', //请求成功状态码
//     result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //模拟的请求数据
// })

//导出
// export default testData
