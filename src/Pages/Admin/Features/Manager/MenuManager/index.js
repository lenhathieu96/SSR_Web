import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {toast} from 'react-toastify'

import {URL} from '../../../../../Connect'
import Menu from "../../../Common/Menu/index";
import EditMenu from "./EditMenu";

import LoadingModal from '../../../Common/Modal/LoadingModal'

import "./MenuManager.scss";
function MenuManager() {
  const [sourceMenu, setSourceMenu] = useState([])
  const [filterMenu, setFilterMenu] = useState([]);
  const [selectedFood, setSelectFood] = useState({name:"",price:""});
  const [isLoading, setLoading] = useState(false);

  const API_URL = URL+'/food'
  
  useEffect(() => {
    setLoading(true)
    const cancelToken = axios.CancelToken;
    const source  = cancelToken.source();
    
    const loadMenu = () =>{
      try{
        axios.get(API_URL,{cancelToken: source.token})
          .then((res) => {
            if (res.status === 200) {
              const menudata= res.data
              setSourceMenu(menudata);
              setFilterMenu(menudata);
              setLoading(false)
            }
          });
      }catch(error){
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }  
    }

    loadMenu()
    return()=>{
      source.cancel()
    }   
  }, [API_URL]);

  const notify = (text,isSuccess)=>{
    toast.clearWaitingQueue()
    isSuccess ?
    toast.success(text)
    :
    toast.error(text)
  }
  //on add button is clicked
  const onAddNew = (food) => {
    // setLoading(true)
    axios.post(API_URL + "/addFood", food)
      .then(res => {
        setLoading(true)
        if (res.status === 200) {
          const templist = [...sourceMenu];
          templist.push(food);
          setSourceMenu(templist);
          setFilterMenu(templist)
          setLoading(false)
        }
      })
      .catch((err)=>{
        // console.log(err.response.data);
        notify(err.response.data,false)
        setLoading(false)
      });
  };

  //on update button is clicked
  const onUpdate = (id, food) => {
    setLoading(true)
    axios.post(API_URL + "/updateFood", { id, food })
    .then((res) => {
      if (res.status === 200) {
        const templist = [...sourceMenu]
        const index = templist.findIndex(item=>item._id===id)
        food.price = parseInt(food.price)
        templist[index]= {...food}
        setSourceMenu(templist)
        setFilterMenu(templist)
        notify("Chỉnh Sửa Thành Công",true)
        setLoading(false)
      }
    })
    .catch((err)=>{
      // console.log(err.response.data);
      notify(err.response.data,false)
      setLoading(false)
    });
  };
  const onDelete = (foodID) => {
    setLoading(true)
    axios.post(API_URL + "/deleteFood",foodID)
      .then((res)=>{
        if(res.status ===200){
          const templist = [...sourceMenu]
          const filter = templist.filter(item=>item._id!==foodID)
          setSourceMenu(filter)
          setFilterMenu(filter)
          notify("Chỉnh Sửa Thành Công",true)
          setLoading(false)
        }
      })
      .catch((err)=>{
        // console.log(err.response.data);
        notify(err.response.data,false)
        setLoading(false)
      });
  };


  //on cancel button is clicked
  const onCancelSelect = () => {
    setSelectFood({name:"",price:""});
  };

  //search data
  const search = (text) => {
   if(text !== ''){
     const newData = sourceMenu.filter((item )=> {
       const itemData = item.name.toUpperCase()
       const textData = text.toUpperCase()
       return itemData.indexOf(textData)>-1
     })
     setFilterMenu(newData)
   }else{
     setFilterMenu(sourceMenu)
   }
  };

  return (
    <div className="MenuManager-container">
      <div className="MenuManager-container__detail">
        {/* render all items of menu */}
        <div className = "Menu-wrapper">
          <Menu onSelectFood={setSelectFood} data={filterMenu} />
        </div>
        {/* crud item of menu */}
        <EditMenu
          selectedFood={selectedFood}
          onAddNew={onAddNew}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onCancelSelect={onCancelSelect}
        />
      </div>

      <div className="MenuManager-container__tools">
        {/* edit price for all food in menu button */}
        <Button>Chỉnh Sửa Giá Tất Cả</Button>
        {/* search food */}
        <Input
          placeholder="Nhập Tên Sản Phẩm"
          onChange={(event) => {
            search(event.target.value)
          }}
        />
      </div>
      <LoadingModal isLoading={isLoading} />
    </div>
  );
}

MenuManager.propTypes = {};

export default MenuManager;
