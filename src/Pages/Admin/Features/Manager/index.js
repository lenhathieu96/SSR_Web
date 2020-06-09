import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTable, faChartBar} from "@fortawesome/free-solid-svg-icons";

import MenuManager from './MenuManager'

import './Manager.scss'

function Manager() {
  const [feature, setFeature] = useState(1);

  // render body with feature state 
  const renderSwitch = () => {
    switch (feature) {
      // case 1:
      //   return <Analytic/>
      default:
        return <MenuManager/>
    }
  }

  return (
    <div className="Manager">
      
    {/*render 2 button table and menu  */}
      <div className="left-menu">
      {/* menu button */}
        <Button
          onClick={()=>setFeature(1)}
          className={feature===1?"active":""}
        >
          <FontAwesomeIcon
            icon={faHamburger}
            size={"3x"}
            className="nav-icon"
          />
          Thực Đơn
        </Button>

        <Button
          onClick={()=>setFeature(2)}
          className={feature=== 2?"active":""}
        >
          <FontAwesomeIcon
            icon={faChartBar}
            size={"3x"}
            className="nav-icon"
          />
          Thống Kê
        </Button>

        {/* table button */}
        <Button
          className={feature=== 3?"active":""}
          onClick={()=>setFeature(3)}
        >
          <FontAwesomeIcon icon={faTable} size={"3x"} className="nav-icon" />
          Phòng Bàn
        </Button>
      </div>

      {/* if first content, left-top border-radius will be 0  */}
      <div className={`content ${feature===1?'first-content':''}`}>
          {renderSwitch()}
      </div>
      
    </div>
  );
}

// Manager.propTypes = {

// };

export default Manager;
