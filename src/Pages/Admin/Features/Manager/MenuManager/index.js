import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";

import foodAPI from '../../../../../Api/foodAPI'
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
    const loadMenu = async () =>{
      const allFood = await foodAPI.getAllFood()
      .then(res=>{
        if(res && res.data){
          return res.data
        }
        return res
      })
      setSourceMenu(allFood);
      setFilterMenu(allFood);
      setLoading(false)
    }
    loadMenu()
  }, []);

  //on cancel button is clicked
  const onCancelSelect = () => {
    setSelectFood({name:"",price:""});
  };

  //on add button is clicked
  const onAddNew = (food) => {
    setLoading(true)
    foodAPI.addNewFood(food).then(()=>{
      const templist = [...sourceMenu];
      templist.push(food);
      setSourceMenu(templist);
      setFilterMenu(templist)
      onCancelSelect()
      setLoading(false)
    }).catch(err=>{
      setLoading(false)
      console.log(err)
      alert('Thêm Thất Bại')
    })
  };

  //on update button is clicked
  const onUpdate = (id, food) => {
    setLoading(true)
    foodAPI.updateFood({id,food}).then(res=>{
      setLoading(false)
      const templist = [...sourceMenu]
        const index = templist.findIndex(item=>item._id===id)
        food.price = parseInt(food.price)
        templist[index]= {...food}
        setSourceMenu(templist)
        setFilterMenu(templist)
        onCancelSelect()
        setLoading(false)
    }).catch(err=>{
      setLoading(false)
      console.log(err)
    })
  };

  const onDelete = (foodID) => {
    setLoading(true)
    foodAPI.deleteFood(foodID).then(()=>{
      const templist = [...sourceMenu]
            const filter = templist.filter(item=>item._id!==foodID)
            setSourceMenu(filter)
            setFilterMenu(filter)
            setLoading(false)
            onCancelSelect()
    })
    .catch(err=>{
      console.log(err)
    })
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
        {/* <Button>Chỉnh Sửa Giá Tất Cả</Button> */}
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
