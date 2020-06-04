import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import Order from "./Order";
import "./SelectedTable.scss";

orderDetail.propTypes = {
  table: PropTypes.number.isRequired,
  bill: PropTypes.object.isRequired,
  };

function orderDetail(props) {
  const {
    table,bill,
    increaseOrder,decreaseOrder,delOrder,
    createBill,chargeBill
  } = props;

  let totalPrice = 
  Object.keys(bill).length!==0? 
    bill.Order.reduce((totalPrice, order) => (totalPrice += order.totalPrice),0)
  :
    0;

  return (
    <div className="tableDetail-container">
      {/* render order item in bill if it have */}
      <div className="tableDetail-container__info">
        {Object.keys(bill).length===0||bill.Order.length===0?
          <div className = "order-null">
            <p>Bàn Trống</p>
          </div>
        :
          bill.Order.map((order, index) => (
            <Order
              key={order._id}
              index={index + 1}
              order={order}
              increaseOrder={increaseOrder}
              decreaseOrder={decreaseOrder}
              delOrder={delOrder}
            />        
          )
        )
        }
      </div>

      {/* render tool if bill have order */}
      {Object.keys(bill).length!==0?
        bill.Order.length!==0?
          <div className="tableDetail-container__tools">
            <div className="total-price">
              <p>Tổng Tiền</p>
              <p style={{ textAlign: "right", color: "#e78200" }}>
                {totalPrice.toLocaleString()}
              </p>
            </div>
            <div className="button-wrapper">
              <Button
                className={!bill.hasOwnProperty('Created') ? "btn-add" : "btn-charge"}
                onClick={() =>
                  !bill.hasOwnProperty('Created') ?
                    createBill({
                      Table: table,
                      Order: bill.Order,
                      TotalPrice: totalPrice,
                    })
                  :
                    chargeBill(bill.ID)
                }
              >
                {!bill.hasOwnProperty('Created') ? "Tạo Đơn" : "Thanh Toán"}
              </Button>
              {bill.hasOwnProperty('Created') ? (
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
