import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from '@material-ui/core/CircularProgress'
function LoadingModal(props){
    const {isLoading} = props
    return(
        <Dialog open={isLoading}>
            <DialogContent style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                <CircularProgress/>
                <p>Đang Tải Dữ Liệu, Vui Lòng Chờ</p>
            </DialogContent>
        </Dialog>
    )
}

export default LoadingModal

