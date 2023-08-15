export type mockParameter<T> = {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    mockData: T
}