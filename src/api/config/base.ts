import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import axios from 'axios'

import { requestInterceptor, responseInterceptor } from './interceptor'

// // 创建 axios 实例
// const service = axios.create({
//     baseURL: 'http://localhost:8080', // url = base url + request url
//     // withCredentials: true, // send cookies when cross-domain requests
//     timeout: 5000 // request timeout (ms)
// })

export class API {
    // axios 实例
    instance: AxiosInstance
    // 基础配置，url和超时时间
    baseConfig: AxiosRequestConfig = {
        baseURL: "http://localhost:8080", // url = base url + request url
        // withCredentials: true, // send cookies when cross-domain requests
        timeout: 10000 // request timeout (ms)
    }

    constructor(config: AxiosRequestConfig) {
        // 使用axios.create创建axios实例，配置为基础配置和我们传递进来的配置
        this.instance = axios.create(Object.assign(this.baseConfig, config))

        // 调用拦截器
        requestInterceptor(this.instance)
        responseInterceptor(this.instance)
    }

    // 定义请求方法
    public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.request(config)
    }
}

const service = new API({}).instance

export default service