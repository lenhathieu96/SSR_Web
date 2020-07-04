import React, { useState,useEffect } from "react";
import Grid from '@material-ui/core/Grid'
import {
  faHistory,
  faCheckCircle,
  faVolumeUp,
  faVolumeOff,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";


import {socket} from '../../Connect'

import Order from "./Order";

import color from '../../utils/Color'
import './Kitchen.scss'

const Data = [];

function Kitchen() {
  const [mute, setMute] = useState(false);
  const [data, setData] = useState(Data);
 
  let history = useHistory();
  const logOut = ()=>{
    localStorage.removeItem('kitToken')
    history.push('/')
  }

  useEffect(()=>{
    socket.emit('allBill')
    socket.on('allBillResult',(orders)=>{
      setData(orders)
    })
  },[])
  //Khi làm xong 1 món
  const onDone_one = (billId,orderId) => {
    socket.emit('oneDone',billId,orderId)
  };

  //khi làm xong tất cả
  const onDone_all = (billId,orderId) => {
    socket.emit('allDone',billId,orderId)
  };

  //Khi đã phục vụ 1 món
  const onServed_one = (billId,orderId) => {
    socket.emit('oneServed',billId,orderId)
  };

  //khi đã phục vụ tất cả
  const onServed_all = (billId,orderId) => {
    socket.emit('allServed',billId,orderId)
  };
  

  return (
    <div className = "Kitchen-container">
      <div className="Kitchen-container__body">
      {/*left-block */}
        <Grid item xs ={6} className="process-container">

          <div className="process-container__header" style={{ backgroundColor: color.primary }}>
            <FontAwesomeIcon
              icon={faHistory}
              size={"lg"}
              className="icon"
            />
            <h4>Chờ Chế Biến</h4>
            <FontAwesomeIcon
              icon={mute ? faVolumeOff : faVolumeUp}
              size={"2x"}
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={() => setMute(!mute)}
            />
          </div>

          {/* orders wait to cook*/}
          <div className="process-container__body">
          <div className= "wrapper">
          {data.map((item, index) => (
            <div key={index}>
              {item.Orders.filter((doneOrder) => doneOrder.done < doneOrder.quantity && doneOrder.served===0).map(
                (order, order_index) => (
                  <Order item={order}
                  billID={item.ID}
                  table={item.Table}
                  createTime={item.Created} 
                  key={order_index} 
                  isDone={false}
                  onDone_one={onDone_one}
                  onDone_all={onDone_all}
                  />
                )
              )}
              </div>
            ))}
          </div>
          
          </div>
        </Grid>

        {/* right-block */}
        <Grid xs ={6} className="process-container">

          <div className="process-container__header" style={{ backgroundColor: "#00b551" }}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size={"lg"}
              className="icon"
            />
            <h4>Món Đã Xong/Chờ Phục Vụ</h4>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size={"2x"}
              className ="icon"
              style={{ cursor: "pointer" }}
              onClick={()=>logOut()}
            />
          </div>

          {/* Orders wait to serve */}
          <div className="process-container__body" style={{borderColor:"#00b551" }}>
            <div className="wrapper">
            {data.map((item, index) => (
              <div key={index}>
                {item.Orders.filter((doneOrder) => doneOrder.done >0 && doneOrder.served < doneOrder.quantity).map(
                  (order, order_index) => (
                    <Order item={order}
                    billID={item.ID}
                    table={item.Table}
                    createTime={item.Created} 
                    key={order_index} 
                    isDone={true}
                    onServed_one={onServed_one}
                    onServed_all={onServed_all}
                    />
                  )
                )}
              </div>
            ))}
            </div>
              </div>
          
         

        </Grid>
      </div>
    </div>
  );
}

export default Kitchen;
