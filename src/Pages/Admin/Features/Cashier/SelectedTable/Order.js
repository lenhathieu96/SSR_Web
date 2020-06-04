import React, { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlusIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Minimize";

OrderItem.propTypes = {
  order:PropTypes.object.isRequired,
  index:PropTypes.number.isRequired,
  increaseOrder:PropTypes.func,
  decreaseOrder:PropTypes.func,
  delOrder:PropTypes.func
};

function OrderItem(props) {
  const {order,index,increaseOrder,decreaseOrder,delOrder} = props
  return (
    <div className="OrderItem-container">
      <p>{index}.</p>
      
      <p className="OrderItem-container__name">{order.name}</p>
     
      <div className="OrderItem-container__quantity">
        {/* btn-minus */}
        
        <IconButton
          aria-label="minus-one"
          style={{marginBottom:10}}
          disabled={order.quantity>1?false:true}
          onClick={() => decreaseOrder(order._id)}
        >
          <MinusIcon />
        </IconButton>

        <p>{order.quantity}</p>
        
        <IconButton
          aria-label="plus-one"
          onClick={() => 
            increaseOrder(order._id)
          }
        >
          <PlusIcon />
        </IconButton>
      </div>
      {/* price for one */}
      <p className="OrderItem-container__price">{order.price.toLocaleString()}</p>
      {/* price for all */}
      <p className="OrderItem-container__price">{order.totalPrice.toLocaleString()}</p>
      {/* btn-del */}
      <IconButton aria-label="delete" onClick={()=>delOrder(order._id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default OrderItem;
