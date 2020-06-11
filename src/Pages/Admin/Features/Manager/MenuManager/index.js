import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";

import {URL} from '../../../../../Connect'
import Menu from "../../../Common/Menu/index";
import EditMenu from "./EditMenu";

import "./MenuManager.scss";

function MenuManager() {

  const [data, setData] = useState([]);
  const [selectedFood, setSelectFood] = useState({name:"",price:""});
  
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    //get all data of menu
    axios.get(URL+'/food').then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, []);

  //on add button is clicked
  const onAddNew = (food) => {
    axios.post(URL + "/addFood", food).then((res) => {
      if (res.status === 200) {
        const templist = data;
        templist.push(food);
        setData(templist);
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
  const onDelete = (food) => {
    console.log("delete food");
  };

  //on cancel button is clicked
  const onCancelSelect = () => {
    setSelectFood({});
  };

  //search data
  const searchData = () => {
    const filterlist = data.filter((item) =>
      item.name.toLowerCase().includes(filterString.toLowerCase())
    );
    setData(filterlist);
  };

  return (
    <div className="MenuManager-container">
      <div className="MenuManager-container__detail">
        {/* render all items of menu */}
        <div className = "Menu-wrapper">
          <Menu onSelectFood={setSelectFood} data={data} />
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
            // search only input not null
            if (event.target.value !== "") {
              setFilterString(event.target.value);
              searchData();
            } else {
              setData(data);
            }
          }}
        />
      </div>
    </div>
  );
}

MenuManager.propTypes = {};

export default MenuManager;
