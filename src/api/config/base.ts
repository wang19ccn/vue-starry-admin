import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://localhost:8080', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout (ms)
})

export default service