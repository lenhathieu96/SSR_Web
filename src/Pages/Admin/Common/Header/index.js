import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartBar,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../../Assets/Images/logo.png";

import './Header.scss'

Header.propTypes = {
  onChooseCategory:PropTypes.func.isRequired,
  category:PropTypes.number.isRequired
};

function Header(props) {
    //destructuring props
    const {onChooseCategory,category} = props
   
    return (
        <div className="header">
        {/*image*/}
        <div className="image">
          <img src={Logo} alt ="logo" />
        </div>

        {/*nav*/}
        <div className="nav">
          {/*btn-cashier*/}
          <Button
            variant="contained"
            onClick={() => onChooseCategory(1)}
            style={{ color: category === 1 ? "#283593": "rgba(0, 0, 0,0.54)"}}
          >
           
              <FontAwesomeIcon
                icon={faCashRegister}
                size={"2x"}
                className="nav-icon"
              />
              <p>THU NGÂN</p>
           
          </Button>
          {/*btn-analytics*/}
          <Button
            variant="contained"
            onClick={() => onChooseCategory(2)}
            style={{ color: category === 2 ? "#283593": "rgba(0, 0, 0,0.54)" }}
          >
            
              <FontAwesomeIcon
                icon={faChartBar}
                size={"2x"}
                className="nav-icon"
              />
              <p>THỐNG KÊ</p>
           
          </Button>
          {/*btn-manager*/}
          <Button
            variant="contained"
            onClick={() => onChooseCategory(3)}
            style={{ color: category === 3 ? "#283593": "rgba(0, 0, 0,0.54)" }}
          >
           
              <FontAwesomeIcon
                icon={faUserCog}
                size={"2x"}
                className="nav-icon"
              />
              <p>QUẢN LÝ</p>
          </Button>
          {/*  */}
          <span
            className={`indicator ${
              category === 1
                ? "cashier-line"
                : category === 2
                ? "analytic-line"
                : "manager-line"
            }`}
          ></span>
        </div>
       {/*  <div className="user"></div> */}
      </div>
    );
}

export default Header;