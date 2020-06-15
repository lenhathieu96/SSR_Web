import React from "react";
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import{
  Switch,
  Route,
  useRouteMatch,
  Link
} from  'react-router-dom'

import Cashier from "./Features/Cashier";
import Manager from "./Features/Manager"

import Logo from "../../Assets/Images/logo.png";
import "./Admin.scss";


function Admin() {
  let {path, url} = useRouteMatch()
  
  
  return (
    <Grid style ={{height:"100%"}}>
      <div className="Admin__header">
        <div className="logo">
          <img src={Logo} alt ="logo" />
        </div>

        <div className="nav">
          <Link to={url} className="nav-item">
            <div className = "nav-item__wrapper">
              <FontAwesomeIcon
                icon={faCashRegister}
                size={"2x"}
                className="icon"
              />
              <p>THU NGÂN</p>
            </div>
             
          </Link>

          <Link to={`${url}/Manager`}  className="nav-item">
            <div className = "nav-item__wrapper">
              <FontAwesomeIcon
                icon={faUserCog}
                size={"2x"}
                className="icon"
              />
              <p>QUẢN LÝ</p>
            </div>
          </Link>
         <span className="indicator"/> 
        </div>
      </div>

      <div className="Admin__body">   
        <Switch>
          <Route exact path={path} component={<Cashier/>} />
          <Route exact path={`${path}/Manager`} component={<Manager/>} />
        </Switch>
      </div>  
    </Grid>
  );
}

export default Admin;
