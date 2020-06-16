import React, {useEffect, useState} from 'react'
import LoadingModal from '../../../Common/Modal/LoadingModal'
import {BarChart, XAxis, YAxis, Bar} from 'recharts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";


import axios from 'axios'
import {URL} from '../../../../../Connect'

import color from '../../../../../utils/Color'
import './Analytic.scss'

function Analytic(){
  const [isLoading, setLoading] = useState(false);
  const [weekRevenue, setWeekRevenue] = useState([])
  const [monthRevenue, setMonthRevenue] = useState(0)

  const WeeklyRevenue_API_URL = URL+'/analytic/weekRevenue'
  const MonthlyRevenue_API_URL = URL+'/analytic/revenueByMonth'

  const formatter = (value)=>{
    if(value===0){
      return value
    }else{
      if(value>1000000){
        return `${value/1000000} tr`
      }else{
        return `${value/1000000} tr`
      }
    }
    
  }

  useEffect(() => {
    setLoading(true)
    const loadMenu = async () =>{
      const requestWeekly = axios.get(WeeklyRevenue_API_URL)
      const requestMonthly = axios.get(MonthlyRevenue_API_URL)

      await axios.all([requestWeekly,requestMonthly]).then(axios.spread((...response)=>{
        const weeklyRespone = response[0]
        if(weeklyRespone.status===200){
          const weekRevenueData= weeklyRespone.data
          setWeekRevenue(weekRevenueData)
        }

        const monthlyResponse = response[1]
        if(monthlyResponse.status===200){
          setMonthRevenue(monthlyResponse.data.revenue)
        }
        setLoading(false)
      })).catch(errors=>{
        console.log(errors)
      })
    }
    loadMenu()  
  },[WeeklyRevenue_API_URL,MonthlyRevenue_API_URL]);

    return(
        <div className= "Analytic-container">
            <div className = "blockInfo-container">
              
              <div className = "blockRevenue">
                  <p>Doanh Thu Hôm Nay</p>
                  <div className="blockRevenue__body">
                    <FontAwesomeIcon icon={faCoins} className="icon" size={'4x'} color={color.primary}/>
                    <div className = "detail">
                      <div className = "wrapper">
                        <p>{weekRevenue.length>0?(weekRevenue[0].revenue).toLocaleString():0} VNĐ</p>
                      </div>
                      <div className="wrapper">
                        <p style={{
                          fontSize:'medium',color:'black', fontWeight:'normal'
                        }}>{weekRevenue.length>0?weekRevenue[0].billQuantity:0} Đơn Hàng Đã Hoàn Thành</p>
                      </div>
                    </div>
                  </div>            
                </div>
                
                <div className = "blockRevenue">
                  <p>Doanh Thu Tháng Này</p>
                  <div className="blockRevenue__body">
                    <FontAwesomeIcon icon={faCreditCard} className="icon" size={'4x'} color={color.primary}/>
                    <div className = "detail">
                      <div className = "wrapper">
                        <p>{monthRevenue.toLocaleString()} VNĐ</p>
                      </div>
                    </div>
                  </div>            
                </div>

               {/*  <div className = "dailyRevenue">
                  <p>Món Bán Chạy Nhất Hôm Nay</p>
                  <div className="dailyRevenue__body">
                    <FontAwesomeIcon icon={faCoins} className="icon" size={'4x'} color={color.primary}/>
                    <div className = "detail">
                      <div className = "wrapper">
                        <p>{weekRevenue.length>0?(weekRevenue[0].revenue).toLocaleString():0} VNĐ</p>
                      </div>
                    </div>
                  </div>            
                </div> */}
                

            </div>
            <div className = "chart-container">
            <p>Doanh Thu 7 Ngày Gần Đây</p>
            {weekRevenue.length>0 ?
              <BarChart width={0.85*window.innerWidth} height={350} data={weekRevenue} className='chart'>
                <XAxis dataKey="day" />
                <YAxis tickFormatter={formatter}/>
                <Bar dataKey="revenue" barSize={40} fill="#e78200" />
              </BarChart>
              :null
            }
            </div>
            <LoadingModal isLoading={isLoading} />
        </div>
       
    )
}

export default Analytic;