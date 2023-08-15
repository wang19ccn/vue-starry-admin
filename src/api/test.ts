import { request } from './config/base'

export function getTestArr(query: any) {
    return request({
        url: '/test',
        method: 'GET',
        params: query
    })
}