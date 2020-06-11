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


import './Kitchen.scss'
import Order from "./Order";
import {socket} from '../../Connect'

const Data = [];

function Kitchen() {
  const [mute, setMute] = useState(false);
  const [data, setData] = useState(Data);
 
  useEffect(()=>{
    socket.emit('allBill')
    socket.on('allBillResult',(order)=>{
      setData(order)
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
      {/* block bên trái */}
        <Grid xs ={6} className="process-container">

          <div className="process-container__header" style={{ backgroundColor: "#283593" }}>
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

          {/* Danh sách các món chờ chế biến */}
          <div className="process-container__body">
          {/* render các phần tử có giá trị quantity >0 */}
          {data.map((item, index) => (
            <div key={index}>
              {item.Order.filter((doneOrder) => doneOrder.done === 0 && doneOrder.served===0).map(
                (order, order_index) => (
                  <Order item={order}
                  billID={item.ID}
                  table={item.Table} 
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
        </Grid>
        {/* block bên phải */}
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
            />
          </div>

           {/* Danh sách các món đã làm xong chờ phục vụ */}
          <div className="process-container__body" style={{borderColor:"#00b551" }}>
            {data.map((item, index) => (
              <div key={index}>
               {/*render các phần tử có thuộc tính done >0*/}
                {item.Order.filter((doneOrder) => doneOrder.done>0).map(
                  (order, order_index) => (
                    <Order item={order}
                    billID={item.ID}
                    table={item.Table} 
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

        </Grid>
      </div>
      <div className="Kitchen-container__footer">
        hotLine:0901231xxx
      </div>
    </div>
  );
}

export default Kitchen;
