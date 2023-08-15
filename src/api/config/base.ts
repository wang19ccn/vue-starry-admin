import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import axios from 'axios'

import { requestInterceptor, responseInterceptor } from './interceptor'

type Result<T> = { // 约定后端数据结构
    code: number,
    message: string,
    result: T,
}

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

        // 载入拦截器
        requestInterceptor(this.instance)
        responseInterceptor(this.instance)
    }

    // 定义请求方法
    public request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        return this.instance.request(config)
    }

    // 定义具体请求
    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        console.log('axios api get')
        return this.instance.get(url, config);
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        return this.instance.post(url, data, config);
    }

    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        console.log('axios api put')
        return this.instance.put(url, data, config);
    }

    public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
        console.log('axios api delete')
        return this.instance.delete(url, config);
    }
}

const service = new API({})

export default service // 导出service实例，允许特殊情况直接调用
export const request = service.request.bind(service) // 导出request方法，注意this，需要显示绑定