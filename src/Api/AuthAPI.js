import axiosClient from './AxiosClient'

const authAPI = {
    login: (params) => {
        const url = '/auth'
        return axiosClient.post(url,{params})
    }
}
export default authAPI;