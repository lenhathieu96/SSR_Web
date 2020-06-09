import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import Order from "./Order";
import "./SelectedTable.scss";

orderDetail.propTypes = {
  currentTable: PropTypes.object.isRequired,
};

function orderDetail(props) {
  const {
    currentTable,
    increaseOrder,decreaseOrder,delOrder,noteOrder,
    createBill,chargeBill
  } = props;

  let totalPrice = 
  Object.keys(currentTable).length>1? 
    currentTable.Orders.reduce((totalPrice, order) => (totalPrice += order.totalPrice),0)
  :
    0;

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

              increaseOrder={increaseOrder}
              decreaseOrder={decreaseOrder}
              delOrder={delOrder}
              noteOrder={noteOrder}
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
              <p style={{ textAlign: "right", color: "#e78200" }}>
                {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="button-wrapper">
              <Button
                className={!currentTable.hasOwnProperty('Created') ? "btn-add" : "btn-charge"}
                // onClick={() =>
                //   !currentTable.hasOwnProperty('Created') ?
                //     createBill({
                //       Table: currentTable,
                //       Orders: bill.Order,
                //       TotalPrice: totalPrice,
                //     })
                //   :
                //     chargeBill(bill.ID)
                // }
              >
                {!currentTable.hasOwnProperty('Created') ? "Tạo Đơn" : "Thanh Toán"}
              </Button>
              {currentTable.hasOwnProperty('Created') ? (
                <Button className="btn-edit">
                  <span>Tách Ghép Đơn</span>
                </Button>
              ) : null}
            </div>
          </div>
        : 
          null
      :
        null
      }
    </div>
  );
}

export default orderDetail;
