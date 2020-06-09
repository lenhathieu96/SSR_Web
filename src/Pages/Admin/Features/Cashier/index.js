import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import TableList from "./TableList";
import Menu from "../../Common/Menu";
import TableNull from "./SelectedTable/tableNulll"
import TableDetail from "./SelectedTable"

import socket from "../../../../Connect/SocketIO";
import serverURL from '../../../../Connect/ServerURL'

import "./Cashier.scss";

function Cashier() {
  const URL = serverURL+"food";

  const [listTable, setListTable] = useState([]);

  const [currentTable, setCurrentTable] = useState({});

  const [menuData, setData] = useState([]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios.get(URL).then((res) => {
      if (res.status === 200) {
        setData(res.data);
        
      }
    });
    const tables = new Array(30)
    .fill({})
    .map((item,index)=>({ ...item, Table: index+1}))
    socket.emit('allBill')
    socket.on('allBillResult',(bills)=>{
     let tempTables = [...tables]
    //have bills not payed yet
      if(bills.length>0){
        for(let item of bills){
          let index = item.Table -1;
          tempTables[index] = {...tempTables[index], ...item}
        }
      }
      setListTable(tempTables)
    })
  },[]);

  const createBill = (order) => {
    socket.emit("createBill", order);
    socket.on('createBillResult',(result)=>{
      setCurrentTable({})
      setShowMenu(false)
    })
  };

  const chargeBill = (billID)=>{
    // console.log(billID)
    socket.emit('chargeBill',billID)
    socket.on('chargeBillResult',(result)=>{
      setCurrentTable({})
    })
  }

  //choose a table when click on icon table 
  const getCurrentTable = (number) => {
    const table = listTable.find(item=>item.Table === number)
    setCurrentTable(table) 
  };

  // choose a food add to bill on click in menu
  const setSelectFood = (food) => {
    let tempBill ;
    if(!currentTable.hasOwnProperty('Orders')){
      tempBill = {...currentTable,Orders:[]}
      food.done = 0;
      food.quantity = 1;
      food.served = 0;
      food.totalPrice = food.price;
      food.note = "";
      tempBill.Orders.push(food)
    }else{
      tempBill = {...currentTable}
      if(tempBill.Orders.find(item=>item._id===food._id)){
        const orders = tempBill.Orders
        const index = orders.findIndex(item => item._id === food._id)
        orders[index].quantity += 1
        orders[index].totalPrice = orders[index].price * orders[index].quantity;
      }else{
        food.done = 0;
        food.quantity = 1;
        food.served = 0;
        food.totalPrice = food.price;
        food.note = "";
        tempBill.Orders.push(food)
      }
    }
    setCurrentTable(tempBill)
  };

  
  // //increase quantity and price for order
  const increaseOrder = (id) => {
      let tempBill = {...currentTable};
      let orders = tempBill.Orders
      const index = orders.findIndex((item) => item._id === id);
      orders[index].quantity+=1;
      orders[index].totalPrice = orders[index].price * orders[index].quantity;
      setCurrentTable(tempBill);
  };

  // //decrease quantity and price for order
  const decreaseOrder = (id) => {
      let tempBill = {...currentTable};
      let orders = tempBill.Orders
      const index = orders.findIndex((item) => item._id === id);
      orders[index].totalPrice = orders[index].price * orders[index].quantity;
      orders[index].quantity -= 1;
      setCurrentTable(tempBill);
  };

  // //delete Order in Bill when create new Bill
  const delOrder = (id) => {
    if(!currentTable.hasOwnProperty('Created')){
      let bill = {...currentTable};
      let orders = bill.Orders
      bill.Orders = orders.filter((item) => item._id !== id)
      setCurrentTable(bill)
    }
  };

  const noteOrder = (id,text)=>{
    if(!currentTable.hasOwnProperty('Created')){
      let bill = {...currentTable};
      let orders = bill.Orders
      const index = orders.findIndex((item) => item._id === id);
      orders[index].note = text
      setCurrentTable(bill)
    }
  }

  return (
    <div className="Cashier-container">
      {/*left-side*/}
      <div className="left-container">
        {/* left header with 2 buttons*/}
        <div className="header">
          {/* table list button */}
          <Button
            className={!showMenu ? "--active" : ""}
            onClick={() => setShowMenu(false)}
          >
            Bàn
          </Button>
          {/* menu button */}
          <Button
            className={showMenu ? "--active" : ""}
            onClick={() => setShowMenu(true)}
          >
            Thực Đơn
          </Button>
        </div>

        {/* render tablelist or menu when click buttons on header */}
        <div className={`body ${!showMenu ? "first-content" : ""}`}>
          {!showMenu ? (
            <TableList
              listTable={listTable}
              getCurrentTable={getCurrentTable}
            />
          ) : (
              <Menu onSelectFood={setSelectFood} data={menuData} />
          )}
        </div>
      </div>
      {/* right side */}
      <div className="right-container">
        {/* render header with state currentTable */}
        <div className="header">
        {currentTable.hasOwnProperty('Table') ?
          <div className="header__title">
            Bàn {currentTable.Table}
            {/* btn-close current table */}
            <FontAwesomeIcon
              icon={faTimes}
              size={"lg"}
              style={{ color: "white", marginLeft: 100 }}
              onClick={() => setCurrentTable({})}
            /> 
          </div>
          :null  
        }
        </div>
        {/* order-detail of current table */}
        <div className={`body ${currentTable.hasOwnProperty('Table')? "haveTable" : ""} `}>
          {currentTable.hasOwnProperty('Table') ? (
            <TableDetail
              currentTable={currentTable}
              createBill={createBill}
              chargeBill={chargeBill}

              increaseOrder={increaseOrder}
              decreaseOrder={decreaseOrder}
              noteOrder={noteOrder}
              delOrder={delOrder}
            />
          ) : (
            <TableNull />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cashier;
