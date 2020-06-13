import React, {useState} from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import Order from "./Order";
import ConfirmModal from '../../../Common/Modal/ConfirmModal'
import SwitchTableModal from './SwitchTableModal'

import color from '../../../../../utils/Color'
import "./SelectedTable.scss";

OrderDetail.propTypes = {
  currentTable: PropTypes.object.isRequired,
  chargeBill: PropTypes.func.isRequired,
  updateBill: PropTypes.func.isRequired,
  deleteBill: PropTypes.func.isRequired,
  switchTable: PropTypes.func.isRequired,
};

function OrderDetail(props) {
  const {
    currentTable,emptyTables,
    createBill, chargeBill, updateBill, deleteBill,switchTable
  } = props;

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showSwitchTableModal, setShowSwitchTableModal] = useState(false)

  let totalPrice = 
  Object.keys(currentTable).length>1? 
    currentTable.Orders.reduce((totalPrice, order) => (totalPrice += order.totalPrice),0)
  :
    0;

    const handleCloseConfirmModal=() => {
      setShowConfirmModal(false)
    }
  
    const handleAccept = () => {
      deleteBill(currentTable._id)
      handleCloseConfirmModal()
    }

    const handleCloseSwitchTableModal=() => {
      setShowSwitchTableModal(false)
    }
    
    const handleSwitchTable = (chosenTable)=>{
      switchTable(currentTable.ID,chosenTable)
      handleCloseSwitchTableModal()
    }

  

  return (
    <div className="tableDetail-container">
      {/* render order item in bill if it have */}
      <div className="tableDetail-container__info">
        {Object.keys(currentTable).length <= 1 || currentTable.Orders.length === 0?
          <div className = "order-null">
            <p>Bàn Trống</p>
          </div>
        :
        currentTable.Orders.map((order, index) => (
            <Order
              key={order._id}
              index={index + 1}
              order={order}
            />        
          )
        )
        }
      </div>

      {/* render tool if bill have order */}
      {Object.keys(currentTable).length > 1 ?
        currentTable.Orders.length!==0?
          <div className="tableDetail-container__tools">
            <div className="total-price">
              <p>Tổng Tiền</p>
              <p style={{ textAlign: "right", color: color.secondary }}>
                {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="button-wrapper">
              <Button
                className={!currentTable.hasOwnProperty('Created') ? "btn-add" : "btn-charge"}
                onClick={() =>
                  !currentTable.hasOwnProperty('Created') ?
                    createBill({   
                      Table: currentTable.Table,
                      Orders: currentTable.Orders,
                      TotalPrice: totalPrice,
                    })
                  :
                    chargeBill(currentTable.ID)
                }
              >
                {!currentTable.hasOwnProperty('Created') ? "Tạo Đơn" : "Thanh Toán"}
              </Button>
              {
                currentTable.hasOwnProperty('Created') ? 
                  (
                    <Button 
                      style={{background:color.green}}
                      onClick={()=>{
                        updateBill(currentTable.ID, currentTable.Orders)
                      }}
                    >
                      <span>Cập Nhập</span>
                    </Button>
                  ) 
                  : null
              }
              {currentTable.hasOwnProperty('Created') ? (
                <Button 
                  style={{background:color.secondary}}
                  onClick={()=>setShowSwitchTableModal(true)}
                >
                  <span>Chuyển Bàn</span>
                </Button>
              ) : null}
              {currentTable.hasOwnProperty('Created') ? (
                <Button 
                  style={{background:color.red}}
                  onClick={() => setShowConfirmModal(true)}
                >
                  <span>Huỷ Đơn</span>
                </Button>
              ) : null}
            </div>
          </div>
        : 
          null
      :
        null
      }
      <ConfirmModal 
        isOpen={showConfirmModal} 
        handleCloseModal={handleCloseConfirmModal} 
        handleAccept={handleAccept} 
      />
      <SwitchTableModal 
        isOpen={showSwitchTableModal}
        currentTable={currentTable.Table}
        emptyTables={emptyTables}
        handleSwitchTable={handleSwitchTable}
        handleCloseModal={handleCloseSwitchTableModal}
      />
    </div>
  );
}

export default OrderDetail;
