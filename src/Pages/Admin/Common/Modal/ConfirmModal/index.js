import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ConfirmModal(props){
    const {isOpen, handleCloseModal, handleAccept} = props
    return(
        <Dialog
        open={isOpen}
        onClose={handleCloseModal}
      >
        <DialogTitle id="alert-dialog-title">{"Xác Nhận"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn Có Chắc Chắn Muốn Xoá Chứ ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Không
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            Có
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default ConfirmModal;

