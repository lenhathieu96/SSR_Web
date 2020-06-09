import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlusIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Minimize";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  increaseOrder: PropTypes.func,
  decreaseOrder: PropTypes.func,
  delOrder: PropTypes.func,
};

function OrderItem(props) {
  const {
    order,
    index,
    increaseOrder,
    decreaseOrder,
    delOrder,
    noteOrder,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlesubmitNote = () => {
    noteOrder(order._id, note);
    handleCloseModal();
  };

  return (
    <div>
      <div className="OrderItem-container">
        <p>{index}.</p>
        <p className="OrderItem-container__name">{order.name}</p>
        <div className="OrderItem-container__quantity">
          {/* btn-minus */}
          <IconButton
            aria-label="minus-one"
            style={{ marginBottom: 10 }}
            disabled={order.quantity > 1 ? false : true}
            onClick={() => {
              if (order.served === 0 && order.done === 0) {
                decreaseOrder(order._id);
              }
            }}
          >
            <MinusIcon />
          </IconButton>

          <p>{order.quantity}</p>

          <IconButton
            aria-label="plus-one"
            onClick={() => {
              if (order.served === 0 && order.done === 0) {
                increaseOrder(order._id);
              }
            }}
          >
            <PlusIcon />
          </IconButton>
        </div>
        {/* price for all */}
        <p className="OrderItem-container__price">
          {order.totalPrice.toLocaleString()}
        </p>
        {/* btn-del */}
        {order.served === 0 && order.done === 0 ? (
          <IconButton aria-label="delete" onClick={() => delOrder(order._id)}>
            <DeleteIcon />
          </IconButton>
        ) : null}
        {order.served === 0 && order.done === 0 ? (
          <IconButton aria-label="edit" onClick={() => handleOpenModal()}>
            <EditIcon />
          </IconButton>
        ) : null}
      </div>
      <div style={{marginLeft:20,fontStyle:'italic'}}>{order.note}</div>

      <Dialog open={showModal} onClose={handleCloseModal} fullWidth={true}>
        <DialogTitle id="form-dialog-title">Ghi Chú</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth={true}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Hủy
          </Button>
          <Button onClick={handlesubmitNote} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OrderItem;
