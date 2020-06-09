import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import "./TableList.scss";

TableList.propTypes = {
  listTable:PropTypes.array.isRequired,
  getCurrentTable: PropTypes.func.isRequired,
};

function TableList(props) {
  const { listTable, getCurrentTable } = props;

  const servingTables = listTable.filter(item=>Object.keys(item).length >1).length

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(15);
  const [render_tables, setRenderTables] = useState([]);
  
  useEffect(()=>{
    setRenderTables(listTable.slice(start,end))
  },[listTable,start,end])


  //on btn next is clicked
  const handleNext = () => {
    setStart(end);
    if (listTable.length < end + 15) {
      setEnd(listTable.length);
    } else {
      setEnd(end + 15);
    }
  };

  //on btn previous is clicked
  const handlePrevious = () => {
    setEnd(start);
    if (0 > start - 15) {
      setStart(0);
    } else {
      setStart(start - 15);
    }
  };

  return (
    <div className="tableList-container">
      <div className="tableList-container__selection">
        <Button>Tất Cả</Button>
      </div>
      <div className="tableList-container__detail">
        {/* backward-arrow */}
        <div className="arrow-wrapper">
          {start !== 0 ? (
            <FontAwesomeIcon
              icon={faChevronLeft}
              size={"2x"}
              color={"white"}
              className="table-icon"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handlePrevious();
              }}
            />
          ) : null}
        </div>

        {/* render table list */}
        <div className="list-wrapper">
          {render_tables.map((item, index) => (
            <Button
              className={Object.keys(item).length>1 ? 'served ' : ''}
              key={index}
              onClick={() => getCurrentTable(item.Table)}
            >
              <div className="table-item">
                <FontAwesomeIcon icon={faUtensils} size={"3x"} className="icon" />
                <p>Bàn {item.Table}</p>
              </div>
            </Button>
          ))}
        </div>
        {/* forward-arrow */}
        <div className="arrow-wrapper">
          {end !== listTable.length ? (
            <FontAwesomeIcon
              icon={faChevronRight}
              size={"2x"}
              color={"white"}
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleNext();
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="tableList-container__config">
        Số Bàn Đang Phục Vụ: {servingTables}/{listTable.length}
      </div>
    </div>
  );
}

export default TableList;
