import type { mockParameter } from 'TYPES/api/mock.type'

const test: mockParameter<any>[] =
    [
        {
            url: '/test',
            method: 'get',
            mockData: {
                code: 0,
                message: 'success',
                result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        }
    ]



export default test