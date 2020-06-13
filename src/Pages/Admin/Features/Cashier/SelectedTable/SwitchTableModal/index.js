import React, {useState} from "react";
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import color from '../../../../../../utils/Color'
import './SwitchTableModal.scss'



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

SwitchTableModal.propTypes={
    isOpen: PropTypes.bool.isRequired,
    currentTable: PropTypes.number.isRequired,
    emptyTables: PropTypes.array.isRequired,
    handleCloseModal:PropTypes.func.isRequired,
    handleSwitchTable:PropTypes.func.isRequired,
}

function SwitchTableModal(props){
    const classes = useStyles();

    const [chosenTable, setChosenTable] = useState("");

    const{
            isOpen, 
            currentTable, emptyTables,
            handleCloseModal, handleSwitchTable
        } = props

    const handleChooseTable = (event)=>{
        setChosenTable(event.target.value)
    }
    
    return(
        <Dialog
            open={isOpen}
            onClose={handleCloseModal}
        >
        <DialogTitle style={{color:color.primary}}>{"Chọn Bàn Cần Chuyển tới"}</DialogTitle>
        <DialogContent>
            <div className="SwitchTable-container">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Bàn {currentTable}</InputLabel>
                    <Select disabled={true} label="Bàn" value={""}/>
                </FormControl>

                <FontAwesomeIcon icon={faArrowRight} size={"2x"} color={color.secondary} className= "icon" />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Bàn</InputLabel>
                    <Select
                      value={chosenTable}
                      onChange={handleChooseTable}
                    label="Bàn"
                    >
                    {emptyTables.map(item=><MenuItem key={item.Table} value={(item.Table).toString()}>Bàn {item.Table}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleCloseModal()} color="primary">
            Huỷ
          </Button>
          <Button onClick={()=>handleSwitchTable(chosenTable)}  color="primary" autoFocus>
            Chuyển
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default SwitchTableModal;

