import React,{useState} from 'react';
import PropTypes from 'prop-types';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

EditModal.propTypes = {
    showModal:PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleSubmitNote: PropTypes.func.isRequired
};

function EditModal(props) {
    const{showModal,
        handleCloseModal,handleSubmitNote} = props
  
    const [note, setNote] = useState("") ;

    return (
        <Dialog open={showModal} onClose={handleCloseModal} fullWidth={true}>
        <DialogTitle id="form-dialog-title">Ghi Chú</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth={true}
            onChange={(event) => {
              setNote(event.target.value);
            }}
            value={note}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleCloseModal()} color="primary">
            Hủy
          </Button>

          <Button onClick={()=>handleSubmitNote(note)} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default EditModal;