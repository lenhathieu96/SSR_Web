import React, {useState} from "react";
import Grid from '@material-ui/core/Grid'

import Header from './Header/index'
import Cashier from "./Features/Cashier";
import Manager from "./Features/Manager"

// import AdminRoute from '../../Route/AdminRoute'

// import socket from "../../Socket";

import "./Admin.scss";


function Admin() {
  const [category,setCategory] = useState(1)
  
  const onChooseCategory = (number)=>{
    setCategory(number)
  }

  const renderSwitch = () => {
    switch (category) {
      case 1:
        return <Cashier/>
      default:
        return <Manager/>
    }
  }

  return (
    <Grid style ={{height:"100%"}}>
      {/* header */}
     <Header onChooseCategory = {onChooseCategory} category = {category}/>
      {/* body */}
     <div className="body">
        {renderSwitch()}
      </div>  
    </Grid>
  );
}

export default Admin;
