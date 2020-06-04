import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import {
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Order(props) {
  const {
    billID,item,table,isDone,
    onDone_one,onDone_all,onServed_all,onServed_one,
  } = props;
  return (
    <div className="Order-container">

      <div className="Order-subContainer">
        <p className="Order-subContainer__name">{item.name}</p>
        <p className="Order-subContainer__note">{item.note}</p>
      </div>

      <p className="Order-container__time"> 2 phút trước</p>

      <div className="Order-subContainer">
        {table === 0 ? (
          <p style={{ fontWeight: "bold" }}>Mang Về {"HD1231231231"} </p>
        ) : (
          <div>
            <p style={{ fontWeight: "bold" }}>Bàn: {table}</p>
          </div>
        )}
        <p style={{ fontWeight: "bold" }}>
          Số Lượng: {isDone ? item.done : item.quantity}
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

Order.PropsType = {
  item: PropTypes.object.isRequired,
  table: PropTypes.string.isRequired,
  billID:PropTypes.string.isRequired,
  onDone_single: PropTypes.func,
  onDone_all: PropTypes.func,
  onFinish_all: PropTypes.func,
  onFinish_single: PropTypes.func,
};
export default Order;
