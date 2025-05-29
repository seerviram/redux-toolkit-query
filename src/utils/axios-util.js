import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

api.interceptors.request.use((config)=> {
   config.headers['Authorization'] = 'Bearer token'
    return config;
}, (err)=> {
   return Promise.reject(err)
})

api.interceptors.response.use((response)=> {
     return Promise.resolve(response);
}, (err)=> {
   return Promise.reject(err)
})

export default api;
