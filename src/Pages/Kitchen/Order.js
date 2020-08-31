import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import {
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Moment from 'react-moment'
import 'moment/locale/vi'

Order.PropsType = {
  item: PropTypes.object.isRequired,
  table: PropTypes.string.isRequired,
  billID:PropTypes.string.isRequired,
  createTime: PropTypes.string.isRequired,
  isDone:PropTypes.bool.isRequired,

  onDone_single: PropTypes.func,
  onDone_all: PropTypes.func,
  onFinish_all: PropTypes.func,
  onFinish_single: PropTypes.func,
};

function Order(props) {
  const {
    billID,item,table, createTime,isDone,
    onDone_one,onDone_all,onServed_all,onServed_one,
  } = props;
  
  return (
    <div className="Order-container">
      <div className="Order-subContainer">
        <p className="Order-subContainer__name">{item.name}</p>
        <p className="Order-subContainer__note">{item.note}</p>
      </div>

      <Moment className= "Order-subContainer__time" locale="vi" fromNow interval={1000}>{createTime}</Moment>
      <div className="Order-subContainer">
        {table === 0 ? (
          <p style={{ fontWeight: "bold" }}>Mang Về {"HD1231231231"} </p>
        ) : (
          <div>
            <p style={{ fontWeight: "bold" }}>Bàn: {table}</p>
          </div>
        )}
        <p style={{ fontWeight: "bold" }}>
          Số Lượng: {isDone ? item.done - item.served : item.quantity-item.done}
        </p>
      </div>

      <div className="Order-btnContainer">
        <Button
          className="btn-one"
          onClick={() =>
            isDone ? onServed_one(billID,item._id) : onDone_one(billID,item._id)
          }
        >
          <FontAwesomeIcon icon={faAngleRight} size={"lg"} />
        </Button>
        <Button
          className="btn-all"
          onClick={() => (isDone ? onServed_all(billID,item._id) : onDone_all(billID,item._id))}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} size={"lg"} />
        </Button>
      </div>
    </div>
  );
}


export default Order;
