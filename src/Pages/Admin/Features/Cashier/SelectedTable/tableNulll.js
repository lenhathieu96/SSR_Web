import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";

function OrderNull() {
  return (
    <div style={{ textAlign: "center" }}>
      <FontAwesomeIcon icon={faBellSlash} size={"5x"} style={{color:"#283593",marginBottom:20}} />
      <p style={{fontWeight:"bold", color:"#283593"}}>Chưa Có Bàn Nào Được Chọn</p>
    </div>
  );
}

export default OrderNull;
