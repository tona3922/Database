import React from "react";
import "./cart.css";
import "./cart_item.css";
import trashIcon from "../../img/button/trash.png";
import okIcon from "../../img/button/ok.png";
import returnIcon from "../../img/button/return.png";
import minusButton from "../../img/button/minus.png";
import plusButton from "../../img/button/plus.png";
import quitButton from "../../img/button/quit.png";
import { Link } from "react-router-dom";
import { useState } from "react";

// Note: chưa có đường link quay lại trang trước, link tới trang xác nhận đơn

const quantityStyle = {
  backgroundColor: "rgb(249, 205, 211)",
  padding: "5px",
  borderRadius: "5px",
};
const pageTitleStyle = {
  // display: 'flex',
  fontSize: "30px",
  fontWeight: "bold",
  margin: "0px 20px",
  justifyContent: "left",
};
const returnButton = {
  backgroundColor: "#DDBEA9",
  display: "inline",
  color: "#472D30",
  fontSize: "15px",
};
const totalBoxStyle = {
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "10px",
  float: "right",
  margin: "0 5% 1.5%",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  fontWeight: "bold",
  textAlign: "right",
  clear: "both",
};

export function Cart(props) {
  const { cartItems, onDecrease, onIncrease, onDelete, onDeleteAll } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice < 300000 ? itemsPrice * 0.2 : 0;
  const totalPrice = itemsPrice + shippingPrice;

  const {cart, setCart} = useState([]);
 
  

  return (
    <>
      <div>
        <Link to="/">
          <button className="mainButton" style={returnButton}>
            <img src={returnIcon} alt="" />
            Quay lại
          </button>
        </Link>
        <span style={pageTitleStyle}>Giỏ hàng của bạn</span>
      </div>

      <div className="mainBox">
        {cartItems.length !== 0 &&
          cartItems.map((item) => (
            <div
              className="ci_container"
              id={item.id}
              style={{ color: "#79444A" }}
              key={item.id}
            >
              <div id="ci_image">
                <img src={item.thumbnail} style={{ maxWidth: "100%" }} alt="" />
              </div>
              <div id="ci_info">
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  {item.title}
                </p>
                <p>{item.author}</p>
                <p>Giá: {item.price} VNĐ</p>
              </div>
              <div id="ci_quantity">
                <button
                  className="image_button"
                  onClick={() => onDecrease(item)}
                >
                  <img src={minusButton} alt="" />
                </button>
                <span style={quantityStyle}> {item.qty} </span>
                <button
                  className="image_button"
                  onClick={() => onIncrease(item)}
                >
                  <img src={plusButton} alt="" />
                </button>
              </div>
              <div id="ci_item_total">
                <p style={{ fontWeight: "bold" }}>
                  Tổng: {item.price * item.qty} VNĐ
                </p>
              </div>
              <div id="ci_quit_button">
                <button className="image_button" onClick={() => onDelete(item)}>
                  <img src={quitButton} alt="" />
                </button>
              </div>
            </div>
          ))}
        {cartItems.length !== 0 && (
          <div style={totalBoxStyle}>
            <div>Tiền hàng: {itemsPrice} VNĐ</div>
            <div>Phí giao hàng: {shippingPrice} VNĐ</div>
          </div>
        )}
        {cartItems.length !== 0 && (
          <div style={totalBoxStyle}>Tổng cộng: {totalPrice} VNĐ</div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="mainButton" style={{ backgroundColor: "#D4E09B" }}>
          <img src={okIcon} alt="" />
          XÁC NHẬN ĐƠN HÀNG
        </button>
        <button
          className="mainButton"
          style={{ backgroundColor: "#FFC4AE" }}
          onClick={() => {
            if (cartItems.length !== 0)
              if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?"))
                onDeleteAll();
          }}
        >
          <img src={trashIcon} alt="" />
          XÓA GIỎ HÀNG
        </button>
      </div>
    </>
  );
}
