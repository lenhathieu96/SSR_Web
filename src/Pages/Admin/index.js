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
  NavLink,
  Redirect,
  useHistory
} from  'react-router-dom'
import Button from "@material-ui/core/Button";


import Cashier from "./Features/Cashier";
import Manager from "./Features/Manager"

import Logo from "../../Assets/Images/logo.png";
import "./Admin.scss";


function Admin() {
  let {url} = useRouteMatch()
  let history = useHistory();

  const logOut = () =>{
    localStorage.removeItem('manToken')
    history.push('/')
  }

  return (
    <Grid style ={{height:"100%"}}>
      <div className="Admin__header">
        <div className="logo">
          <img src={Logo} alt ="logo" />
        </div>

        <div className="navbar">
          <NavLink to={`${url}/Cashier`} className="navbar__link" activeClassName="navbar__link--active">
            <div className = "nav-item__wrapper">
              <FontAwesomeIcon
                icon={faCashRegister}
                size={"2x"}
                className="icon"
              />
              <p>THU NGÂN</p>
            </div>
             
          </NavLink>

          <NavLink to={`${url}/Manager`}  className="navbar__link" activeClassName="navbar__link--active">
            <div className = "nav-item__wrapper">
              <FontAwesomeIcon
                icon={faUserCog}
                size={"2x"}
                className="icon"
              />
              <p>QUẢN LÝ</p>
            </div>
          </NavLink>
        </div>

        <div>
          <Button onClick={()=>logOut()} style={{color:'#283593'}}>Đăng Xuất</Button>
        </div>
      </div>

      <div className="Admin__body">   
        <Switch>
          <Route  path={`${url}/Cashier`} children={<Cashier/>} />
          <Route  path={`${url}/Manager`} children={<Manager/>} />
          <Route
          path= {url}
          render={() =>
              <Redirect
                to={{
                  pathname: `${url}/Cashier`,
                }}
              />
          }
        />
        </Switch>
      </div>  
    </Grid>
  );
}

export default Admin;
