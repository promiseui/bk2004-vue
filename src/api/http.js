import axios from 'axios'

// 响应拦截器
axios.interceptors.response.use(ret => {
    return ret.data || ret
})

// 请求拦截器
// axios.interceptors.request.use()

export default axios