import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import TableList from "./TableList/index";
import Menu from "../../Common/Menu/index";
import TableNull from "./SelectedTable/tableNulll"
import TableDetail from "./SelectedTable/tableDetail"

import socket from "../../../../Connect/SocketIO";
import serverURL from '../../../../Connect/ServerURL'

import "./Cashier.scss";

const tempdata = [
  {
    _id: "1231",
    name: "Bún Chả Lớn",
    price: 200000,
  },
  {
    _id: "31212",
    name: "Bún Chả Nhỏ",
    price: 780000,
  },
  {
    _id: "31a123",
    name: "Bún Đậu",
    price: 780000,
  },
];

function Cashier() {
  const URL = serverURL+"food";

  const [tableQuantity, setTableQuantiy] = useState([]);

  const [currentBill, setCurrentBill] = useState({});
  const [currentTable, setCurrentTable] = useState(0);

  const [servedTable, setServedTable] = useState([])
  const [allBill,setAllBill] = useState([])

  const [menuData, setData] = useState([tempdata]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    //get all data of menu
    axios.get(URL).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });

    socket.emit('allBill')
    socket.on('allBillResult',(orders)=>{
      let arr =[]
      console.log("co du lieu ve")
      for(let item of orders){
       arr.push(item.Table)
      }
     setServedTable(arr)
     setAllBill(orders)
    })
    

    //create an array with n elements for n tables in restaurant
    let quantity = [];
    for (let i = 0; i < 30; i++) {
      quantity.push(i);
    }
    setTableQuantiy(quantity);
  }, []);

  const createBill = (order) => {
    socket.emit("createBill", order);
    socket.on('createBillResult',(result)=>{
      setCurrentTable(0)
      setCurrentBill({})
      setShowMenu(false)
    })
  };

  const chargeBill = (billID)=>{
    // console.log(billID)
    socket.emit('chargeBill',billID)
    socket.on('chargeBillResult',(result)=>{
      setCurrentTable(0)
      setCurrentBill({})
    })
  }

  //choose a table when click on icon table 
  const getCurrentTable = (number) => {
    setCurrentTable(number);
    const selectBill = allBill.find(bill=>bill.Table===number)
    selectBill?setCurrentBill(selectBill):setCurrentBill({})
  };

  // choose a food add to bill on click in menu
  const setSelectFood = (food) => {
    food.done = 0;
    food.quantity = 1;
    food.served = 0;
    food.totalPrice = food.price;
    
    if(Object.keys(currentBill).length===0){
      let tempBill = {Order:[food]}
      setCurrentBill(tempBill)
      //if that bill have already => can't add new one
    }else if(!currentBill.hasOwnProperty('Created')){
      let tempBill = {...currentBill}
      tempBill.Order.push(food)
      setCurrentBill(tempBill)
    }
  };

  
  // //increase quantity and price for order
  const increaseOrder = (id) => {
    if(!currentBill.hasOwnProperty('Created')){
      let bill = {...currentBill};
      let orders = bill.Order
      const index = orders.findIndex((item) => item._id === id);
      orders[index].quantity++;
      orders[index].totalPrice = orders[index].price * orders[index].quantity;
      setCurrentBill(bill);
    } 
  };

  // //decrease quantity and price for order
  const decreaseOrder = (id) => {
    if(!currentBill.hasOwnProperty('Created')){
      let bill = {...currentBill};
      let orders = bill.Order
      const index = orders.findIndex((item) => item._id === id);
      orders[index].totalPrice = orders[index].price * orders[index].quantity;
      orders[index].quantity--;
      setCurrentBill(bill);
    }
  };

  // //delete Order in Bill when create new Bill
  const delOrder = (id) => {
    if(!currentBill.hasOwnProperty('Created')){
      let bill = {...currentBill};
      let orders = bill.Order
      bill.Order = orders.filter((item) => item._id !== id)
      setCurrentBill(bill)
    }
  };

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
              tableQuantity={tableQuantity}
              servedTable = {servedTable}
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
          {currentTable !== 0 ? (
            <div className="title">
              Bàn {currentTable}
              {/* btn-close current table */}
              <FontAwesomeIcon
                icon={faTimes}
                size={"lg"}
                style={{ color: "white", marginLeft: 100 }}
                onClick={() => setCurrentTable(0)}
              />
            </div>
          ) : null}
        </div>
        {/* order-detail of current table */}
        <div className={`body ${currentTable !== 0 ? "haveTable" : ""} `}>
          {currentTable !== 0 ? (
            <TableDetail
              table={currentTable}
              bill={currentBill}

              createBill={createBill}
              chargeBill={chargeBill}

              increaseOrder={increaseOrder}
              decreaseOrder={decreaseOrder}
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
