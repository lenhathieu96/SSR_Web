import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers:{
        'content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use(async (config) =>{
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
})

axiosClient.interceptors.response.use(
    (response)=>{
        if(response && response.data){
            return response.data;
        }
        return response;
    },
    (error)=>{
        const originalRequest = error.config
        if(error.response.status === 401){
            const refreshToken = localStorage.getItem('refreshToken')
            return axiosClient
            .post('/auth/token', {refreshToken})
            .then(res=>{
                localStorage.setItem('accessToken',res.accessToken)
                originalRequest.headers.Authorization = 'Bearer ' + res.accessToken
                return axios(originalRequest)
            })
            .catch (err=>{
                console.log(err);
            })
        }
        return Promise.reject(error)
    }
)

export default axiosClient;