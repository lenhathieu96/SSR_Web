import React, {useEffect, useState} from 'react'
import LoadingModal from '../../../Common/Modal/LoadingModal'
import {BarChart, XAxis, YAxis, Bar} from 'recharts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

import analyticAPI from '../../../../../Api/AnalyticAPI'

import color from '../../../../../utils/Color'
import './Analytic.scss'

function Analytic(){
  const [isLoading, setLoading] = useState(false);
  const [weeklyRevenue, setweeklyRevenue] = useState([])
  const [monthlyRevenue, setmonthlyRevenue] = useState(0)

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
    const loadData = async () =>{
      try{
        const weeklyData = await analyticAPI.getWeeklyRevenue()
        const monthlyData = await analyticAPI.getMonthlyRevenue()
        console.log(monthlyData);
        setweeklyRevenue(weeklyData)
        setmonthlyRevenue(monthlyData.revenue)
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
      }
    }
    loadData()  
  },[]);

    return(
        <div className= "Analytic-container">
            <div className = "blockInfo-container">
              
              <div className = "blockRevenue">
                  <p>Doanh Thu Hôm Nay</p>
                  <div className="blockRevenue__body">
                    <FontAwesomeIcon icon={faCoins} className="icon" size={'4x'} color={color.primary}/>
                    <div className = "detail">
                      <div className = "wrapper">
                        <p>{weeklyRevenue.length>0?(weeklyRevenue[0].revenue).toLocaleString():0} VNĐ</p>
                      </div>
                      <div className="wrapper">
                        <p style={{
                          fontSize:'medium',color:'black', fontWeight:'normal'
                        }}>{weeklyRevenue.length>0?weeklyRevenue[0].billQuantity:0} Đơn Hàng Đã Hoàn Thành</p>
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
                        <p>{monthlyRevenue.toLocaleString()} VNĐ</p>
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
                        <p>{weeklyRevenue.length>0?(weeklyRevenue[0].revenue).toLocaleString():0} VNĐ</p>
                      </div>
                    </div>
                  </div>            
                </div> */}
                

            </div>
            <div className = "chart-container">
              <p>Doanh Thu 7 Ngày Gần Đây</p>
              {weeklyRevenue.length>0 ?
                <BarChart width={0.85*window.innerWidth} 
                          height={350} 
                          data={weeklyRevenue} 
                          className='chart'>
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