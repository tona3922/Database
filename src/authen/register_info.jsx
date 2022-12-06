import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import back_icon from "../img/back.png";
import ok_icon from "../img/button/ok.png";
import "./register_info.css";

export function Info_input(props) {
  return (
    <div className="info-input">
      <label className="register-label" htmlFor="">
        {props.labelName}
      </label>
      <input
        className="register-input"
        type={props.type}
        placeholder={props.labelName}
        onChange={props.onChange}
      />
    </div>
  );
}

export const Register_info = (props) => {
  const location = useLocation();
  const state = location.state;
  const[info, setInfo] = useState({
      username: state.username,
      password: state.password,
      confirm_password: state.confirm_password,
      fullname: "",
      sex: "",
      id: "",
      phone: "",
      email: "",
      address: "",
      bdate: "",
      role: "",
  });
  console.log(info);
  
  
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8800/account",info)
      console.log(res);
      navigate("/")
    }catch(err){
      console.log(err);
      alert("You can not create account")
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <header className="register-header">
          <h1>THÔNG TIN CÁ NHÂN</h1>
        </header>
        <div className="register-content">
          <Info_input
            labelName="Họ và tên"
            type="text"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  fullname: e.target.value,
                };
              })
            }
          />
          <Info_input
            labelName="Sinh nhật"
            type="text"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  bdate: e.target.value,
                };
              })
            }
          />
          <div className="info-input">
            <label for="account" className="register-label">Giới tính</label>
            <select 
              name="sex" 
              id="sex" 
              className="register-input options"
              onChange={(e) =>
                setInfo((state) => {
                  return {
                    ...state,
                    sex: e.target.value,
                  };
                })
              }>
            <option value=""></option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="info-input">
            <label for="account" className="register-label">Vai trò</label>
            <select 
              name="roles" 
              id="roles" 
              className="register-input options"
              onChange={(e) =>
                setInfo((state) => {
                  return {
                    ...state,
                    role: e.target.value,
                  };
                })
              }>
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Provider">Provider</option>
            <option value="Customer">Customer</option>
            </select>
          </div>

          <Info_input
            labelName="CMND/CCCD"
            type="text"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  id: e.target.value,
                };
              })
            }
          />
          <Info_input
            labelName="Số điện thoại"
            type="text"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  phone: e.target.value,
                };
              })
            }
          />
          <Info_input
            labelName="Địa chỉ"
            type="text"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  address: e.target.value,
                };
              })
            }
          />
          <div className="button-container">
            <Link to="/signup">
              <button className="btn-reg back-btn">
                <img src={back_icon} alt="" />
                Quay lại
              </button>
            </Link>
            <Link to="/" userRole={info.role}></Link>
            <button className="btn-reg confirm-btn" onClick={handleClick}>
              <img src={ok_icon} alt="" />
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
