import axiosClient from './AxiosClient'
const URL = '/food'
const foodAPI = {
    getAllFood: ()=>{
        const url  = URL
        return axiosClient.get(url)
    },
    addNewFood: (params) =>{
        const url = URL + '/addFood'
        return axiosClient.post(url,{params})
    },
    updateFood : (params) => {
        const url = URL + '/updateFood'
        return axiosClient.post(url, {params})
    },
    deleteFood: (params) => {
        const url = URL + '/deleteFood'
        return axiosClient.post(url, {params})
    }
}

export default foodAPI