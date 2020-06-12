import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

  useEffect(() => {
    setLoading(true)
    axios.get(URL+'/food').then((res) => {
      if (res.status === 200) {
        const menudata= res.data
        setSourceMenu(menudata);
        setFilterMenu(menudata);
        setLoading(false)
      }
    });
  }, []);

  //on add button is clicked
  const onAddNew = (food) => {
    axios.post(URL + "/addFood", food).then((res) => {
      if (res.status === 200) {
        const templist = [...sourceMenu];
        templist.push(food);
        setSourceMenu(templist);
        setFilterMenu(templist)
        alert("Thêm Sản Phẩm Thành Công");
      } else {
        alert("Thêm Sản Phẩm Thất Bại");
      }
    });
  };

  //on update button is clicked
  const onUpdate = (id, food) => {
    axios.post(URL + "/updateFood", { id, food }).then((res) => {
      if (res.status === 200) {
        alert("Chỉnh Sửa Thành Công");
      } else {
        alert("Chỉnh Sửa Thất Bại");
      }
    });
  };

  //on delete button is clicked
  const onDelete = (foodID) => {
    console.log(foodID);
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
