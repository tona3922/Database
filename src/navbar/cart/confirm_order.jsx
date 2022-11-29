import okIcon from "../../img/button/ok.png";
import returnIcon from "../../img/button/return.png";
import pen from "../../img/pen.png";
import momo from "../../img/momo.png";
import bank from "../../img/bank.png";
import cash from "../../img/cash.png";
import "./confirm_order.css";
import "./cart.css"; // for mainBox mainButton style
import { useRef, useState } from "react";

// Note: chưa có đường link trở về trang giỏ hàng, chưa có props thông tin người dùng và mã giỏ hàng

const pageTitle = {
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
const sectionTitle = {
  fontWeight: "bold",
  fontSize: "25px",
};

export default function ConfirmOrder(props) {
  const [inputs, setInputs] = useState({
    name: props.name,
    number: props.number,
    address: props.address,
    code: props.code,
    total: props.total,
    method: "0",
  });

  const handleFormChange = (event) => {
    const attr = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [attr]: value }));
  };
  const handleChoiceChange = (event) => {
    setInputs((values) => ({ ...values, method: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Your name is: " +
        inputs.name +
        "\nYour number is: " +
        inputs.number +
        "\nYour address is: " +
        inputs.address
    );
  };
  return (
    <>
      <div>
        <button className="mainButton" style={returnButton}>
          <img src={returnIcon} alt="" />
          Quay lại
        </button>
        <span style={pageTitle}>Xác nhận đơn hàng</span>
      </div>

      <div className="mainBox">
        <div className="mainBox formBox formContainer">
          <div className="row" style={sectionTitle}>
            1. Thông tin người nhận
          </div>
          <form>
            <EditableInput
              labelText="Tên"
              name="name"
              value={inputs.name}
              onChange={handleFormChange}
            />
            <EditableInput
              labelText="SĐT"
              name="number"
              value={inputs.number}
              onChange={handleFormChange}
            />
            <EditableInput
              labelText="Địa chỉ"
              name="address"
              value={inputs.address}
              onChange={handleFormChange}
            />
          </form>
        </div>
        <div className="mainBox formBox formContainer">
          <div style={sectionTitle}>2. Thông tin đơn hàng</div>
          <form>
            <UneditableInput
              labelText="Mã đơn hàng"
              name="code"
              value={inputs.code}
            />
            <UneditableInput
              labelText="Tổng cộng"
              name="total"
              value={inputs.total + " VNĐ"}
            />
          </form>
        </div>
      </div>

      <div className="mainBox">
        <div className="mainBox choiceBox">
          <div style={sectionTitle}>3. Phương thức thanh toán</div>
          <label className="choiceContainer">
            <input
              type="radio"
              value="0"
              checked={inputs.method === "0"}
              onChange={handleChoiceChange}
            />
            <img
              src={cash}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Thanh toán tiền mặt khi nhận hàng
          </label>
          <br />
          <label className="choiceContainer">
            <input
              type="radio"
              value="1"
              checked={inputs.method === "1"}
              onChange={handleChoiceChange}
            />
            <img
              src={bank}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Chuyển khoản qua ngân hàng
          </label>
          <br />
          <label className="choiceContainer">
            <input
              type="radio"
              value="2"
              checked={inputs.method === "2"}
              onChange={handleChoiceChange}
            />
            <img
              src={momo}
              style={{ width: "30px", verticalAlign: "middle" }}
              alt=""
            />
            Thanh toán qua ví Momo
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="mainButton"
          style={{ backgroundColor: "#E0FD56" }}
          onClick={handleSubmit}
        >
          <img src={okIcon} alt="" />
          XÁC NHẬN ĐẶT HÀNG
        </button>
      </div>
    </>
  );
}

function EditableInput(props) {
  const { labelText, name, value, onChange } = props;
  const inputRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    inputRef.current.focus();
  };

  return (
    <div className="row">
      <div className="col-25">
        <label>{labelText}</label>
      </div>
      <div className="col-75">
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="col-end">
        <button
          className="mainButton"
          onClick={handleClick}
          style={{ backgroundColor: "inherit", boxShadow: "none" }}
        >
          <img src={pen} alt="" />
        </button>
      </div>
    </div>
  );
}

function UneditableInput(props) {
  const { labelText, name, value } = props;

  return (
    <div className="row">
      <div className="col-25">
        <label>{labelText}</label>
      </div>
      <div className="col-75">
        <input type="text" name={name} value={value} readOnly />
      </div>
    </div>
  );
}
