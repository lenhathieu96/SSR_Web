import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  increaseOrder,
  decreaseOrder,
  delOrder,
  noteOrder,
} from "../../../../../actions/currenTableActions";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlusIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Minimize";
import EditIcon from "@material-ui/icons/Edit";

import EditModal from "../../../Common/Modal/EditModal";

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function OrderItem(props) {
  const { order, index } = props;
  const dispath = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const handleOnIncrease = (orderId) => {
    const action = increaseOrder(orderId);
    dispath(action);
  };

  const handleOnDecrease = (orderId) => {
    const action = decreaseOrder(orderId);
    dispath(action);
  };

  const handleOnDelete = (orderId) => {
    const action = delOrder(orderId);
    dispath(action);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handelOnNote = (orderId, textNote) => {
    const action = noteOrder({ orderId, textNote });
    dispath(action);
  };

  const handleSubmitNote = (note) => {
    handelOnNote(order._id, note);
    handleCloseModal();
  };

  return (
    <div>
      <div className="OrderDetail-container">
        <div className = "OrderDetail-container__index">
          <p className={order.served===order.quantity?"order--done":""}>{index}.</p>
        </div>

        <div className = "OrderDetail-container__name">
          <p className={order.served===order.quantity?"order--done":""}>{order.name}</p>
        </div>

        <div className="OrderDetail-container__quantity">
          <IconButton
            aria-label="minus-one"
            style={{ marginBottom: 10 }}
            disabled={order.quantity > 1 ? false : true}
            onClick={() => {
              if (order.done < order.quantity) {
                handleOnDecrease(order._id);
              }
            }}
          >
            <MinusIcon />
          </IconButton>
          <p className={order.served===order.quantity?"order--done":""}>{order.quantity}</p>
          <IconButton
            aria-label="plus-one"
            onClick={() => {
                handleOnIncrease(order._id);
            }}
          >
            <PlusIcon />
          </IconButton>
        </div>
        {/* total price */}
        <div className = "OrderDetail-container__price">
          <p className={order.served===order.quantity?"order--done":""}>
            {order.totalPrice.toLocaleString()}
          </p>
        </div>

        <div className = "OrderDetail-container__buttons">
          {order.served === 0 && order.done === 0 ? 
            (
              <IconButton
              aria-label="delete"
              onClick={() => handleOnDelete(order._id)}
              >
                <DeleteIcon />
              </IconButton>
            ) 
            : null
          }
          {order.served === 0 && order.done === 0 ? 
            (
              <IconButton aria-label="edit" onClick={() => handleOpenModal()}>
                <EditIcon />
              </IconButton>
            )
            : null
          }
        </div>
      </div>
        
      <div className = "OrderNote-container">
        {order.note}
      </div>
      
      {/* note modal */}
      <EditModal
        showModal={showModal}
        handleSubmitNote={handleSubmitNote}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default OrderItem;
