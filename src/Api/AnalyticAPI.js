import axiosClient from './AxiosClient'

const URL = 'analytic'

const AnalyticAPI = {
    getWeeklyRevenue: ()=>{
        const url = URL + '/weeklyRevenue'
        return axiosClient.get(url)
    },

    getMonthlyRevenue : () => {
        const url = URL + '/monthlyRevenue'
        return axiosClient.get(url)
    }
}

export default AnalyticAPI;